import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`;
    const o = {
        color: "red",
        num: 123
    }
    
    return (
        <>
            <Child 
                {...o}
                fn={hello}
                bool
                obj={{ name: "Tom" , age: 18}}
            />
            {/* <Child color="red" num={123} /> */}
        </>
    )
}

export default Example;
