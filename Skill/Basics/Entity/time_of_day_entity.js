/**
 * Time of the day Entity
 */	
const Entity = girequire('src/Entity/entity');

module.exports = class TimeOfDayEntity extends Entity {

	setup() {
		this.data = {
			"morning": {},
			"afternoon": {},
			"evening": {}
		};
	}

	parse(string) {
		var result = this.find(string);
		return result;
	}

}

