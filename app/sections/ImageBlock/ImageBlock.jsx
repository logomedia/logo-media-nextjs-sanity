import { Container } from "@mui/material"
import Link from "next/link";
import Image from "../../components/image/Image"
export default function ImageBlock (props){
    const {alt, image, link} = props;
    <Container>
        <Link href={link} target="_blank">
            <Image alt={alt} src={image.asset.url} sx={{ width: 48, height: 48, zIndex: 10 }} />
        </Link>
	</Container>

}