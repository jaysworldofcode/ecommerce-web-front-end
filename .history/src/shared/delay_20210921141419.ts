function delay(ms: number) {
    console.log("Delay trigger");
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export default delay;