import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "../components/MyCard";


export default function Portfolio(props) {

    const cards = [
        {
            title: "First Project",
            text: "Something About it",
            href: "/"
        },
        {
            title: "First Project",
            text: "Something About it",
            href: "/"
        }
    ]

    return (
        <Container>
            {
                cards.map((card, idx) => {
                    return (<MyCard
                        title={card.title}
                        darkMode={props.darkMode}
                        href={card.href}
                    >
                        {card.text}
                    </MyCard>)
                })
            }
        </Container>

    )
}