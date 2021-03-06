import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Price from '../../components/Price'
import Discount from '../../components/Discount'
import Title from '../../components/Title'
import Card from '../../components/Card'
import { mobileLegendsData } from '../../utils/mlContent'

const Navbar = styled.div`
    z-index: 30;
    top: 0;
    position: sticky;    
    max-width: 600px;
    margin: 0 auto;
`;

const ActionContainer = styled.div`
    width: 100%;
    box-shadow: none;
    padding: 0rem 1rem;
    height: 3rem;
    align-items: center;
    display: flex;
    border-style: none;
    background-color: transparent;
    transition: all 0.2s ease 1s;
`;

const LeftPanel = styled.div`
    width: 100%;
    margin-right: 0.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
`;

const RightPanel = styled.div`
    display: flex;
`;

const ButtonWrapper = styled.div`
    background-color: #595959;
    border-radius: 0.25rem;
    justify-content: center;
    margin-right: 1rem;
    flex: none;
`;

const ActionButton = styled.button`
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    background-image: none;
    padding: 0;
    line-height: inherit;
    color: inherit;
`;

const AddToFavorite = styled.button`
    border: none;
    outline: none;
    background: none;
    padding: 0;
`;

const Main = styled.div`
    max-width: 600px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    padding-top: 1rem;
`;

const ImageContainer = styled.div`
    width: 100%;
    aspect-ratio: 2 / 1;
    overflow: hidden;
    height: 100%;
    display: flex;
    transform: scaleX(-1);
    margin-top: -4rem;
`;

const SummaryProduct = styled.div`
    padding: 1.5rem 1rem;
`;

const InformationProduct = styled.div`
    min-height: 64px;
    justify-content: space-between;
    flex-direction: row;
    display: flex;
`;

const DetailContainer = styled.div`
    width: 100%;
    flex-direction: row;
    display: flex;
`;

const DetailWrapper = styled.div`
    flex-direction: column;
    display: flex;
    line-height: 1.25;
`;

const ProductName = styled.h1`
    overflow: hidden;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
`;

const BrandName = styled.p`
    font-size: 11px;
    color: #9b9b9b;
    font-weight: inherit;
    margin: 0;
`;

const PriceWrapper = styled.div`
    align-items: center;
    display: flex;
`;

const PriceDiscount = styled.div`
    align-items: center;
    display: flex;
`;

const PriceBefore = styled.span`
    text-decoration: line-through;
    color: #9b9b9b;
    font-size: 11px;
    margin-left: 5px;
`;

const BuyTerms = styled.p`
    color: #595959;
    font-size: 12px;
    margin: 0;
`;

const Wishlist = styled.div`
    max-width: 115px;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;
    display: flex;
`;

const Divider = styled.div`
    height: 0.75rem;
    width: 100%;
    background-color: #f4f4f4;
`;

const Description = styled.div`
    padding: 1.5rem 0rem;
`;

const SectionTitle = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

const SeeMore = styled.span`
    line-height: 1.25;
    height: 1rem;
    color: #307fe2;
    font-size: 14px;
    font-weight: 700;
    padding-right: 1rem;
`;

const DescriptionDetail = styled.p`
    font-size: 12px;
    padding: 0rem 1rem;
`;

const MoreDescriptionWrapper = styled.div`
    margin-top: 0.5rem;
    display: flex;
    padding: 0rem 1.5rem;
`;

const MoreDescription = styled.button`
    margin-left: auto;
    margin-right: 0;
    color: #307fe2;
    background: none;
    outline: none;
    padding: 0;
    height: 1rem;
    line-height: 1.25;
    font-size: 14px;
    font-weight: 700;
    font-family: Roboto, sans-serif;
    cursor: pointer;
`;

const BuyContainer = styled.div`
    bottom: 0;
    position: sticky;  
    width: 100%;
    box-shadow: 0 -0.25px 0 rgb(34 34 34 / 25%);
    padding: 1rem 0.5rem;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index; 10;
`;

const AddToCart = styled.button`
    min-width: 6.25rem;
    width: 100%;
    padding: 0px 20px;
    font-size: 14px;
    color: white;
    background-color: #ef6000;
    outline: none;
    height: 2.5rem;
    font-weight: 700;
    cursor: pointer;
    border-radius: 0.5rem;
`;

const RecommendationProduct = styled.div`
    padding: 1.5rem 0rem;
`;

const CardContainer = styled.div`
    width: 100%;
    user-select: none;
    padding: 1rem 1rem 2.5rem 1rem;
    overflow-y: hidden;
    overflow-x: auto;
`;

const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: row;
    display: flex;
`;

const ListCard = styled.div`
    width: 100%;
    flex: none;
    flex-direction: row;
    display: flex;
    cursor: pointer;
`;

const DrawerContainer = styled.div`
    

`;

const Backdrop = styled.div`
    transform: translateX(-50%);
    transition: all 0.25s ease 0s;
    z-index: 40;
    width: 100%;
    left: 50%;
    top: 0;
    position: fixed;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    background-color: rgba(34,34,34,0.75);

`;

const Drawer = styled.div`
    touch-action: none;
    height: 60%;
    transform: translateY(0px);
    transition: all 0.25s ease 0s;
    z-index: 50;
    width: 100%;
    bottom: 0;
    position: fixed;
    padding-bottom: 2rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: white;
    opacity: 1;
`;

const Edge = styled.div`
    width: 3rem;
    height: 0.25rem;
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1.5rem;
    background-color: #9b9b9b;
`;

const DrawerContent = styled.div`

`;

const DrawerDescription = styled.div`
    overflow-wrap: break-word;
    white-space: pre-line;
    color: #222;
    line-height: 1rem;
    font-size: 12px;
    font-weight: 400;
    margin: 0;
    padding: 1rem;
`;

const FullImage = styled.div`
    width: 100%;
    position: fixed;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    background-color: #222;
    z-index: 100;
    top: 0;
`;

const CloseWrapper = styled.div`
    z-index: 100;
    top: 0;
    position: fixed;
    padding: 0.75rem;
`;

const FullWidth = styled.div`
    top: 40%;
    position: fixed;
    max-width: 600px;
    display: flex;
    width: 100%;
    aspect-ratio: 2 / 1;
    max-width: 600px;
    transform: scaleX(-1);
`;

const ItemCountWrapper = styled.div`
    margin-top: -6px;
    right: 20px;
    top: 10px;
    position: absolute;
    margin-right: -0.5rem;
`;

const ItemCount = styled.div`
    user-select: none;
    text-transform: capitalize;
    color: #fff;
    text-align: center;
    min-width: 1rem;
    min-height: 16px;
    justify-content: center;
    flex-direction: row;
    display: flex;
    border-radius: 9999px;
    background-color: #f33030;
`;

const TotalItem = styled.p`
    line-height: 0.75rem;
    font-size: 10px;
    height: 0.75rem;
    align-self: center;
    margin: 0;
`;

const SnackbarCustom = styled(Snackbar)`
    &.MuiSnackbar-root {
        bottom: 65px;
    }
`;

const ProductDetail = () => {
    const router = useRouter()
    const [offset, setOffset] = useState(0);
    const [isZoom, setIsZoom] = useState(false)
    const [addItem, setAddItem] = useState(0)
    const [isFavorite, setIsFavorite] = useState(false)
    const [moreDesc, setIsMoreDesc] = useState(false)
    const [openFavorite, setOpenFavorite] = useState(false)
    const [removeFavorite, setRemoveFavorite] = useState(false)

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    const handleZoomImage = () => {
        setIsZoom(!isZoom);
    }

    const addItemToCart = () => {
        setAddItem(count => count + 1);
    }

    const handleFavorite = () => {
        setIsFavorite(true);
        setOpenFavorite(true);
    }

    const handleRemoveFavorite = () => {
        setIsFavorite(false);
        setRemoveFavorite(true);
    }

    const handleMoreDesc = () => {
        setIsMoreDesc(!moreDesc);
    }

    const handleCloseFavorite = () => {
        setOpenFavorite(false);
    }

    const handleCloseRemoveFavorite = () => {
        setRemoveFavorite(false);
    }

    return (
        <>
            <Head>
                <title>Itemku - Detail Produk</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/itemku-icon.png" />
            </Head>

            <Navbar>
                <ActionContainer>
                    <LeftPanel>
                        <ButtonWrapper>
                            <ActionButton type="button" onClick={() => router.back()}>
                                <Image src='/icons/arrow-left.svg' alt='go-back' width={24} height={24}/>
                            </ActionButton>
                        </ButtonWrapper>
                    </LeftPanel>
                    <RightPanel>
                        <ButtonWrapper>
                            <ActionButton>
                                <Image src='/icons/share.svg' alt='share' width={24} height={24}/>
                            </ActionButton>
                        </ButtonWrapper>
                        <ButtonWrapper>
                            <ActionButton>
                                <Image src='/icons/cart.svg' alt='cart' width={24} height={24}/>
                                {addItem > 0 && (
                                    <ItemCountWrapper>
                                        <ItemCount>
                                            <TotalItem>{addItem}</TotalItem>
                                        </ItemCount>
                                    </ItemCountWrapper>
                                )}
                            </ActionButton>
                           
                        </ButtonWrapper>
                        
                    </RightPanel>
                </ActionContainer>
            </Navbar>

            <Main>
                <ImageContainer onClick={() => handleZoomImage()}>
                    <Image src='/auto-chess.jpeg' alt='thumbnail-product' width={600} height={300}/>
                </ImageContainer>

                {isZoom && (
                    <FullImage>
                        <CloseWrapper>
                            <ActionButton onClick={() => handleZoomImage()}>
                                <Image src='/icons/arrow-left.svg' alt='go-back' width={24} height={24}/>
                            </ActionButton>
                        </CloseWrapper>
                        <FullWidth>
                            <Image src='/auto-chess.jpeg' alt='thumbnail-product' width={600} height={300}/>
                        </FullWidth>
                    </FullImage>
                )}
                

                <SummaryProduct>
                    <InformationProduct>
                        <DetailContainer>
                            <DetailWrapper>
                                <ProductName>366 Diamonds</ProductName>
                                <BrandName>Mobile Legends</BrandName>
                                <PriceWrapper>
                                    <Price primary price={`100000`}/>
                                    <BuyTerms>per 1 Top Up</BuyTerms>
                                </PriceWrapper>
                                <PriceDiscount>
                                    <Discount primary number={50}/>
                                    <PriceBefore>Rp{Intl.NumberFormat("de-DE").format(200000)}</PriceBefore>
                                </PriceDiscount>
                            </DetailWrapper>
                        </DetailContainer>
                        <Wishlist>
                            {isFavorite ? (
                                <AddToFavorite onClick={() => handleRemoveFavorite()}>
                                    <Image src='/icons/heart-filled.svg' alt='favorited' width={24} height={24}/>
                                </AddToFavorite>
                            ) : (
                                <AddToFavorite onClick={() => handleFavorite()}>
                                    <Image src='/icons/heart.svg' alt='add-to-favorite' width={24} height={24}/>
                                </AddToFavorite>
                            )}
                        </Wishlist>
                    </InformationProduct>
                    
                </SummaryProduct>
                
                <Divider/>

                <Description>
                    <Title name={`Deskripsi Produk`}/>
                    <DescriptionDetail>
                        Deskripsi produk mobile legends dari toko UlalaShop yang paling termurah...
                    </DescriptionDetail>
                    <MoreDescriptionWrapper>
                        <MoreDescription onClick={() => handleMoreDesc()}>
                            Selengkapnya
                        </MoreDescription>
                    </MoreDescriptionWrapper>
                </Description>
                
                {moreDesc && (
                    <DrawerContainer>
                        <Backdrop onClick={() => handleMoreDesc()}>
                            <Drawer>
                                <Edge></Edge>
                                <DrawerContent>
                                    <Title name={`Deskripsi Produk`}/>
                                    <DrawerDescription>
                                    
                                    Steam Wallet Code IDR
                                    100% Legal dan Resmi <br/><br/>Estimasi: -+5Menit setelah pembayaran terkonfirmasi
                                    <br/><br/>
                                    Setelah pesanan selesai di redeem, harap:
                                    - Klik Terima Pesanan
                                    - Beri rating, ulasan dan komentar
                                    </DrawerDescription>   
                                </DrawerContent>

                            </Drawer>
                        </Backdrop>
                    </DrawerContainer>
                )}      

                <Divider/>

                <RecommendationProduct>
                    <SectionTitle>
                        <Title name={`Pengiriman Tercepat`}/>
                        <SeeMore>Lihat Semua</SeeMore>
                    </SectionTitle>
                    <DescriptionDetail>
                        Produk dari penjual-penjual yang memberi Garansi Pengiriman 10 menit
                    </DescriptionDetail>

                    <CardContainer>
                        <CardWrapper>
                            <ListCard>
                                {mobileLegendsData.map(({ name, stock, discount, current_price, price_before_discount, delivery_time, product_sold  }) => (
                                    <div>
                                        <Card
                                            name={name}
                                            amount={stock}
                                            number={discount}
                                            priceBefore={price_before_discount}
                                            price={current_price}
                                            badgesDetail={delivery_time}
                                            soldAmount={product_sold}
                                        />
                                    </div>
                                    
                                ))}
                            </ListCard>
                        </CardWrapper>
                    </CardContainer>
                </RecommendationProduct>

                <BuyContainer>
                    <AddToCart onClick={() => addItemToCart()}>Tambah Ke Troli</AddToCart>
                </BuyContainer>
                
                <SnackbarCustom
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    open={openFavorite}
                    autoHideDuration={6000}
                    onClose={() => handleCloseFavorite()}
                    message="Kamu Berhasil Menambahkan Favorit."
                    action={
                        <React.Fragment>
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            sx={{ p: 0.5 }}
                            onClick={() => handleCloseFavorite()}
                          >
                            <CloseIcon />
                          </IconButton>
                        </React.Fragment>
                      }
                />

                <SnackbarCustom
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    open={removeFavorite}
                    autoHideDuration={6000}
                    onClose={() => handleCloseRemoveFavorite()}
                    message="Produk dihapus dari Favorit."
                    action={
                        <React.Fragment>
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            sx={{ p: 0.5 }}
                            onClick={() => handleCloseRemoveFavorite()}
                          >
                            <CloseIcon />
                          </IconButton>
                        </React.Fragment>
                      }
                />
                

            </Main>

           
        </>
    )
}

export default ProductDetail