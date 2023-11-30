import Button from "./Button"

function NavMain(params) {
    return(
        <div className='nav-main'>
            <Button title = "Dashboard"/>
            <Button title = "Game store"/>
            <Button title = "My games"/>
            <Button title = "Favorite"/>
            <Button title = "Turnament"/>
            <Button title = "Coming soon"/>
            <Button title = "Blog y new"/>
            <Button title = "Seeting"/>
        </div>
    )
}

export default NavMain