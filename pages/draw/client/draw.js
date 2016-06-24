Template.draw.events({
	"click #drawIt": function(event){
		drawRhombus();
		window.requestAnimationFrame(drawStuff);
	}
})
function drawRhombus() {
	drawContext = drawSpace.getContext("2d");
	drawContext.strokeStyle="#0000ff"; // or green or "#fff"
	drawContext.moveTo(100,200);
	drawContext.lineTo(200,200);
	drawContext.lineTo(300,100);
	drawContext.lineTo(150,100);
	drawContext.lineTo(100,200);
	drawContext.stroke();
}
