


let group = {
    title: "Our Group",
    students: ["John", "Jill", "Jimmy"],


    showList(){
        //console.log(this)
        this.students.forEach(
            // function(student){
            //     console.log(this.title+ ':'+student)
            // }
            (student)=>{
                console.log(this.title+ ':'+student);
            }
        )  
    }
}

group.showList();
