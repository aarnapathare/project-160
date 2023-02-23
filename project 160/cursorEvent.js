AFRAME.registerComponent("cursor", {
    init:function(){
        this.placesContainer = this.el
        this.handleMouseEnterEvents()
    },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter", ()=>{
            const placesContainer = document.querySelector("#places-container")
            const {state} = placeContainer.getAttribute("tour")
            if(state === "places-list"){
                this.handlePlacesListState()
            }
        })
    }, 
    handlePlacesListState:function(){
        const id = this.el.getAttribute("id")
        const placesId = ["place-home", "place-garden", "place-main_gate"] 
        if(placesId.includes(id)){
            const placeContainer = document.querySelector("#places-container")
            placeContainer.setAttribute("cursor-listener", {
                selectedItemId:id
            })
            this.el.setAttribute("material", {
                opacity:1
            })
        }
    }
})
