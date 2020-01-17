new Vue({
    el:'#app',
    data: {
        user: {
            name: "",
            role: ""
        },
        status: true,
        
        persons: [
            {name:"mercy", role:"vue js"},
            {name:"wisdom", role:"js dev"},
            {name:"stanley", role:"html dev"},
            {name:"ekemini", role:"css dev"},
            {name:"dora", role:"vuejs dev"}
        ]
    },

    methods: {
        addUser(){
           this.persons.push(this.user);
        
        },
        removeItem(index){
            this.persons.splice(index,1);
          
           
        },
        updateItem(id){
            // console.log(id);
            // this.user.name = id.name;
            // this.user.role = id.role;
            this.user = id;
            this.status = !this.status;
            
        },
        updatePerson(index){
            this.persons.push();
        },
        addSubmit(){
            this.status=!this.status;
        }
        // checkStatu{
        //     if(this.status){
        //         console.log("hello");
        //     }else{
        //         console.log("hey");
        //     }
        // }
    },
})

    // beforeCreate(){
    //     alert("before created")
    // },
    // created(){
    //     alert("app created")
    // // },
    // mounted() {
    //     this.checkStatus();
    // }


    