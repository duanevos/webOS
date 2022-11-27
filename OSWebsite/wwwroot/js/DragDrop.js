const position = { x: 0, y: 0 }

interact('.draggable').draggable({
    cursorChecker: function () { return false; },
    allowFrom: '#header',
    
    
    listeners: {
        move(event) {
            position.x += event.dx
            position.y += event.dy

            event.target.style.transform =
                `translate(${position.x}px, ${position.y}px)`
        },
    }
})