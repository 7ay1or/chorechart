
function taskSubmit(){
    console.log("Yay were linked and we ran on task submit")

    let taskName = document.getElementById("formControlInput").value

    console.log("We got out first form value and it's " + taskName)

    let assignee = document.getElementById("formControlSelect").value

    console.log(assignee)

    
}