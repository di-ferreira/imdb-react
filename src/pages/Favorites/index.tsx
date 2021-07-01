/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { ReactNode, useEffect, useState } from "react";
import FooterPage from "../../components/FooterPage";
import MovieResult from "../../components/MovieResult";
import NavBar from "../../components/NavBar";
import api from "../../services/api";

import {
    Container,
    ContentPage,
    ContainerPage,
    Pagination,
    FirstPage,
    PrevPage,
    InfoPage,
    InfoRegisters,
    NextPage,
    LastPage,
} from "./styles";
import { formatLocalDate } from '../../utils/format';
import Loading from "../../components/Loading";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleDoubleRight, FaAngleRight } from 'react-icons/fa';

interface FavoritesProps {
    children?: ReactNode;
}

interface paginationProps{
    page:number;
    total_pages:number;
    total_results:number;
}

function Favorites({ children }: FavoritesProps) {
    const [movies, setMovies] = useState<any[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [pagination, setPagination] = useState<paginationProps>();


    const loadFirstMovie = async ()=>{
        setLoad(true);
         api
                .get(`/movie/popular?page=${currentPage}`)
                .then(async (res:any)=>(
                    await res.data.results.map((m: any) => {
                        m.release_date= formatLocalDate(m.release_date, "yyyy");

                        setPagination({
                            page:res.data.page,
                            total_pages:res.data.total_pages,
                            total_results:res.data.total_results
                        });

                        setMovies(res.data.results);

                        setTotalPage(res.data.total_pages);

                        console.log(res.data);
                        return;
                    })
                ))
                .finally(
                    async ()=>setLoad(false)
                );
    };

    const fcNextPage = () =>{currentPage + 1 >= totalPage ? setCurrentPage(1):setCurrentPage(currentPage + 1)};

    const fcPrevPage = ():void =>{currentPage - 1 <= 1 ? setCurrentPage(1):setCurrentPage(currentPage - 1)};


    useEffect(() => {
        loadFirstMovie();
    }, []);

     useEffect(() => {

            loadFirstMovie();
    }, [currentPage]);


    return (
        <Container>
            <Loading visible={load} />
            <NavBar />
            <ContainerPage>
                <ContentPage>
                    {movies.map((mov) => (
                        <MovieResult
                            key={mov.id}
                            id={mov.id}
                            title={mov.title}
                            url={mov.poster_path}
                            rate={mov.vote_average}
                            favorite={false}
                            release_date={mov.release_date}
                        />
                    ))}
            <Pagination>
                <FirstPage onClick={():void=>(setCurrentPage(1))}>
                    <FaAngleDoubleLeft/>
                </FirstPage>

                <PrevPage onClick={():void=>(fcPrevPage())}>
                    <FaAngleLeft/>
                </PrevPage>

<InfoPage>

                <strong>
                    {currentPage}
                </strong>

                 de

                 <strong>
                    {pagination?.total_pages}
                 </strong>
</InfoPage>

<InfoRegisters>
                 total de registros

                <strong>
                    {pagination?.total_results}
                </strong>

</InfoRegisters>


                <NextPage onClick={():void=>(fcNextPage())}>
                    <FaAngleRight/>
                </NextPage>

                <LastPage  onClick={():void=>(setCurrentPage(pagination?.total_pages || 1))}>
                    <FaAngleDoubleRight/>
                </LastPage>

            </Pagination>
                </ContentPage>
            </ContainerPage>
            <FooterPage />
        </Container>
    );
}

export default Favorites;
