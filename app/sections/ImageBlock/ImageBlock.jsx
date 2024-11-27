import { Container } from "@mui/material"
import Link from "next/link";
import Image from "../../components/image/Image"
export default function ImageBlock (props){
    const {alt, image, link} = props;
    return(
    <Container sx={{marginBottom:5}}>
        <Link href={link} target="_blank">
            <Image alt={alt} src={image.asset.url} sx={{ width: 200,  cursor:"pointer", margin:"auto" }} />
        </Link>
	</Container>
    )

}