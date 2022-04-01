import type { NextPage } from 'next'
import Image from 'next/image'

import yogurt from "/public/images/yogurt.jpg"

const Home: NextPage = () => {

    return <>
        <Image
            src={yogurt}
            alt="Yogurt male"
            layout="fill"
            objectFit='cover'
            objectPosition="50% 0"
        />
        <p style={{
            position: "fixed",
            color: "red",
            fontSize: "10em",
            zIndex: "2",
        }}>
            you are a sigma male.
        </p>
    </>  
}

export default Home
