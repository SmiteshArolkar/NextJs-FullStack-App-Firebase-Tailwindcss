const { default: Link } = require("next/link")

const Searchli = ({value , link}) => {

    return (
        
        <li>
                <Link href={link}>
                {value}
                </Link>
        </li>
        
    )
}

export default Searchli