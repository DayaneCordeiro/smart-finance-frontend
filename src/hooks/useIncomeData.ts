import axios, { AxiosPromise } from "axios";
import { IncomeData } from "../interface/IncomeData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<IncomeData[]> => {
    const response = axios.get(API_URL + '/v1/expenses');
    return response;
}

export function useIncomeData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['income-date'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}