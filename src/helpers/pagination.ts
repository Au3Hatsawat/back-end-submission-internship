import express from 'express';
import { Document } from 'mongoose';

export const Pagiantion = (product: any,page: number) => {
        const numberPerPage = 4;
        const totalPage = product.length / numberPerPage;
        const start = (page - 1) * numberPerPage;


        if(page > totalPage){

            if(!!(totalPage % 1) && page <= totalPage + 1 ){
                // Indivisible condition...
                const total = (totalPage%1)*numberPerPage;
                const indivisibleResult = product.slice(start , start + total);
                return indivisibleResult;
    
            }else {
                return 400;
            }

        }else if(totalPage == 0){
            // Didnt have products enough...
            return product;

        }else if(page == 0){
            return 400;
        }

        const end = start + numberPerPage;
        const result = product.slice(start , end);

        return result;
}