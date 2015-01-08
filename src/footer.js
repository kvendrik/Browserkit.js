	var B = Browserkit;

	Browserkit.fn = Browserkit.prototype;
	B.fn = Browserkit.prototype;

	window.Browserkit = Browserkit;
	window.B = B;

})(this, this.document);