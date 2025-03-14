export default function MouseClicker(){
    function handleMouseClicker(event){
        console.log(event.target.name)
    }
    return (
        <>
        <button name="one" onClick={handleMouseClicker}>Click</button>
        <button name="two" onClick={handleMouseClicker}>
            <img name="img" width={30} height={30}/> 
            Click</button>
        </>
    )
}