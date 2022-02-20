import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import Stock from './Stock'
import Discount from './Discount'
import Price from './Price'
import Badge from './Badge'

const Box = styled.div`
    box-shadow: 0 1px 6px rgb(34 34 34 / 18%);
    min-width: 148px;
    min-height: 238px;
    height: 100%;
    flex-direction: column;
    display: flex;
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    &:first-of-type {
        margin-left: 0;
    }
    &:last-of-type {
        padding-right: 0.5rem;
    }
`;

const ProductImage = styled.div`
    padding-top: 50%;
    width: 100%;
    position: relative;
`;

const ImageWrapper = styled.div`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    position: absolute;
    overflow: hidden;
    transform: scaleX(-1);
`;

const ProductDetail = styled.div`
    padding: 0.75rem 0.5rem;
    width: 100%;
`;

const ProductName = styled.h2`
    overflow: hidden;
    font-size: 12px;
    font-weight: inherit;
    margin: 0;
    padding: 0;
`;

const BrandName = styled.span`
    font-size: 11px;
    color: #9b9b9b;
    font-weight: inherit;
    margin: 0;
`;

const StockWrapper = styled.div`
    margin: 10px 0px;
`;

const PriceDiscount = styled.div`
    align-items: center;
    display: flex;
`;

const PriceWrapper = styled.div`

`;

const PriceBefore = styled.span`
    text-decoration: line-through;
    color: #9b9b9b;
    font-size: 11px;
    margin-left: 5px;
`;

const ProductInfo = styled.div`
    padding: 0 0.5rem;
    height: auto;
    flex-grow: 1;
    justify-content: flex-end;
    flex-direction: column;
    display: flex;
`;

const ProductSold = styled.div`
    font-size: 11px;
    color: #9b9b9b;
    padding-bottom: 0.5rem;
`;

const Card = ({ name, brandName, amount, number, priceBefore, price, badgesDetail, soldAmount }) => {
    
    return (
        <>  
            <Link href='/product-detail'>
                <Box>
                    <ProductImage>
                        <ImageWrapper>
                            <Image src='/auto-chess.jpeg' alt='thumbnail' width={148} height={74}/>
                        </ImageWrapper>
                    </ProductImage>
                    <ProductDetail>
                        <ProductName>{name}</ProductName>
                        <BrandName>{brandName}</BrandName>
                        <StockWrapper>
                            <Stock amount={amount}/>
                        </StockWrapper>
                        {number && (
                            <PriceDiscount>
                                <Discount number={number}/>
                                <PriceBefore>Rp{Intl.NumberFormat("de-DE").format(priceBefore)}</PriceBefore>
                            </PriceDiscount>
                        )}
                        <PriceWrapper>
                            <Price price={price}/>
                        </PriceWrapper>
                        <Badge badgesDetail={badgesDetail}/>
                    </ProductDetail>
                    <ProductInfo>
                        <ProductSold>{soldAmount} produk terjual</ProductSold>
                    </ProductInfo>
                </Box>
            </Link>
        </>
   
    )
}

export default Card