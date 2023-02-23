AFRAME.registerComponent("tour", {
    init:function(){
        this.placesContainer = this.el
        this.cameraEl = document.querySelector("#camera")
        this.createPlaces()
    },

    createPlace:function(){
        const details = {
            garden:{
                position:{x:20, y:-25, z:-5.5}, 
                rotation:{x:0, y:-90, z:0},
                src:"./images/garden.jpg",
                title:"Garden", 
                id:"garden"
            }, 
            maingate:{
                position:{x:4.6, y:-5.5,z:25 }, 
                rotation:{x:180, y:0, z:0}, 
                src:"./images/maingate", 
                title:"Main Gate", 
                id:"main_gate"
            }, 
            home:{
                position:{x:-9, y:34, z:-100}, 
                rotation:{x:0, y:0, z:0}, 
                src:"./images/home", 
                title:"My home", 
                id:"home"
            }
        }

        for(var key in details){
            const items = details[key]
            const thumbnail = this.createThumbnail(item)
            const title = this.createTitleEl(item)
            thumbnail.appendChild(thumbnail)
        }

        
    },
    createThumbnail: function(item){
            const entityEl=document.querySelector
        },

        createThumbnail: function(item){
            const entityEl=document.createElement("a-entity")
            const id = `place-${item.id}`
            entityEl.setAttribute("visible", true)
            entityEl.setAttribute("id", id)
            entityEl.setAttribute("geometry", {
                primitive:"circle", 
                radius:3
            })

            entityEl.setAttribute("position", item.position)
            entityEl.setAttribute("rotation", item.rotation)
            entityEl.setAttribute("material", {src:item.src, opacity:0.6})
            entityEl.setAttribute("cursor-listener", {})
            return entityEl



        }


})