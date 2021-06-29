import { ReactNode, useEffect, useState } from "react";
import api from "../../services/api";
import Slide from "../Slide";

import {
    Container,
    SliderContent,
    SliderInner,
    SlideFooter,
    SlideNavigation,
    FaChevronLeftIcon,
    FaChevronRightIcon,
} from "./styles";

interface BannerProps {
    children?: ReactNode;
}

function Banner({ children }: BannerProps) {
    const [items, setItems] = useState<any>([]);

    const getItems = async () => {
        await api
            .get(
                "/discover/movie?language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
            )
            .then((response: { data: any }) => {
                const itemsData = [];

                for (let i = 0; i < 10; i++) {
                    itemsData.push(response.data.results[i]);
                }

                setItems(itemsData);
            });
    };

    useEffect(() => {
        getItems();
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = items.length;

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === slideLength - 1 ? 0 : currentSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? slideLength - 1 : currentSlide - 1
        );
    };

    useEffect(() => {
        const autoPlay = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(autoPlay);
    });

    return (
        <Container>
            <SliderContent transform={"-" + currentSlide * 100 + "%"}>
                <SliderInner width={slideLength * 100 + "%"}>
                    {items.map((img: any) => (
                        <Slide
                            key={img.id}
                            title={img.title}
                            image={
                                "https://image.tmdb.org/t/p/original" +
                                img.backdrop_path
                            }
                        />
                    ))}
                    <SlideFooter transform={currentSlide * 100 + "%"}>
                        <SlideNavigation>
                            <FaChevronLeftIcon onClick={() => prevSlide()} />
                            <FaChevronRightIcon onClick={() => nextSlide()} />
                        </SlideNavigation>
                    </SlideFooter>
                </SliderInner>
            </SliderContent>
        </Container>
    );
}

export default Banner;
