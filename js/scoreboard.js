let url = "../db/scoareBoard.json"
function getData(){
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        let {scoreBoard, onlineTutorials} = data;
        console.log(scoreBoard)
        console.log(data);
    })
}

getData()

