/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
    SearchBox,
    ErrorSearch,
    Pagination,
    FirstPage,
    PrevPage,
    InfoPage,
    InfoRegisters,
    NextPage,
    LastPage,
} from "./styles";
import { formatLocalDate } from "../../utils/format";
import Loading from "../../components/Loading";
import {
    FaSearch,
    FaAngleDoubleLeft,
    FaAngleLeft,
    FaAngleDoubleRight,
    FaAngleRight,
} from "react-icons/fa";
interface SearchProps {
    children?: ReactNode;
}

interface paginationProps {
    page: number;
    total_pages: number;
    total_results: number;
}

function Search({ children }: SearchProps) {
    const [movies, setMovies] = useState<any[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [pagination, setPagination] = useState<paginationProps>();

    const searchMovie = async () => {
        setLoad(true);
        api.get(`/search/movie?page=${currentPage}&query=${query}`)
            .then(
                async (res: any) =>
                    await res.data.results.map((m: any) => {
                        m.release_date = formatLocalDate(
                            m.release_date,
                            "yyyy"
                        );

                        setPagination({
                            page: res.data.page,
                            total_pages: res.data.total_pages,
                            total_results: res.data.total_results,
                        });

                        setTotalPage(res.data.total_pages);

                        setMovies(res.data.results);
                        return;
                    })
            )
            .finally(async () => setLoad(false));
    };

    const loadFirstMovie = async () => {
        setLoad(true);

        api.get(`/movie/popular?page=${currentPage}`)
            .then(
                async (res: any) =>
                    await res.data.results.map((m: any) => {
                        /*  m.release_date = formatLocalDate(
                            m.release_date,
                            "yyyy"
                        ); */

                        setPagination({
                            page: res.data.page,
                            total_pages: res.data.total_pages,
                            total_results: res.data.total_results,
                        });

                        setMovies(res.data.results);

                        setTotalPage(res.data.total_pages);

                        return;
                    })
            )
            .finally(async () => setLoad(false));
    };

    const clickBuscar = (): void => {
        if (query !== "") {
            localStorage.setItem("@IMDB_QUERY_MOVIES", query);
            setError(false);
            searchMovie();
            setQuery("");
        } else {
            setError(true);
        }
    };

    const fcNextPage = () => {
        currentPage + 1 >= totalPage
            ? setCurrentPage(1)
            : setCurrentPage(currentPage + 1);
    };

    const fcPrevPage = (): void => {
        currentPage - 1 <= 1
            ? setCurrentPage(1)
            : setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        loadFirstMovie();
        const localQuery = localStorage.getItem("@IMDB_QUERY_MOVIES");
        if (localQuery) {
            setQuery(localQuery.toString);
        }
        console.log(localQuery);
    }, []);

    useEffect(() => {
        if (query !== "") {
            searchMovie();
        } else {
            loadFirstMovie();
        }
    }, [currentPage]);

    return (
        <Container>
            <Loading visible={load} />
            <NavBar />
            <ContainerPage>
                <SearchBox>
                    {error ? (
                        <ErrorSearch>
                            Caixa de busca vazia, favor preencher!
                        </ErrorSearch>
                    ) : (
                        ""
                    )}
                    <label>Buscar filmes</label>
                    <input
                        type="text"
                        value={query}
                        placeholder="Digite a sua busca de filme"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            clickBuscar();
                        }}
                    >
                        <FaSearch />
                    </button>
                </SearchBox>
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
                        <FirstPage onClick={(): void => setCurrentPage(1)}>
                            <FaAngleDoubleLeft />
                        </FirstPage>

                        <PrevPage onClick={(): void => fcPrevPage()}>
                            <FaAngleLeft />
                        </PrevPage>

                        <InfoPage>
                            <strong>{currentPage}</strong>
                            de
                            <strong>{pagination?.total_pages}</strong>
                        </InfoPage>

                        <InfoRegisters>
                            total de registros
                            <strong>{pagination?.total_results}</strong>
                        </InfoRegisters>

                        <NextPage onClick={(): void => fcNextPage()}>
                            <FaAngleRight />
                        </NextPage>

                        <LastPage
                            onClick={(): void =>
                                setCurrentPage(pagination?.total_pages || 1)
                            }
                        >
                            <FaAngleDoubleRight />
                        </LastPage>
                    </Pagination>
                </ContentPage>
            </ContainerPage>
            <FooterPage />
        </Container>
    );
}

export default Search;
