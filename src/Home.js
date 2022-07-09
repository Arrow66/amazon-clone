import React from "react"
import Product from "./Product"
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="amazon banner"
                className="home__image" />

            <div className="home__row">
                <Product title={"India Today English Jan 03 , 2022 (Anniversary Special) Paperback Bunko – 25 January 2021"}
                    image={"https://images-na.ssl-images-amazon.com/images/I/51SICavnBKL._SX369_BO1,204,203,200_.jpg"}
                    rating={4}
                    price={11.50}
                />
                <Product title={"India Today English Jan 03 , 2022 (Anniversary Special) Paperback Bunko – 25 January 2021"}
                    image={"https://images-na.ssl-images-amazon.com/images/I/51SICavnBKL._SX369_BO1,204,203,200_.jpg"}
                    rating={4}
                    price={11.50}
                />
            </div>
            <div className="home__row">
                <Product title={"India Today English Jan 03 , 2022 (Anniversary Special) Paperback Bunko – 25 January 2021"}
                    image={"https://images-na.ssl-images-amazon.com/images/I/51SICavnBKL._SX369_BO1,204,203,200_.jpg"}
                    rating={4}
                    price={11.50}
                />
                <Product title={"India Today English Jan 03 , 2022 (Anniversary Special) Paperback Bunko – 25 January 2021"}
                    image={"https://images-na.ssl-images-amazon.com/images/I/51SICavnBKL._SX369_BO1,204,203,200_.jpg"}
                    rating={4}
                    price={11.50}
                />
                <Product title={"India Today English Jan 03 , 2022 (Anniversary Special) Paperback Bunko – 25 January 2021"}
                    image={"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}
                    rating={4}
                    price={11.50}
                />
            </div>
        </div>
    )
}

export default Home