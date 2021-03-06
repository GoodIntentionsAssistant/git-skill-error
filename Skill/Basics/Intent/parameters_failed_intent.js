/**
 * Parameters Failed Intent
 */
const Intent = girequire('src/Intent/intent');

module.exports = class ParametersFailedIntent extends Intent {

	setup() {
	}

	response(request) {
		var intent_name = request._failed_intent.identifier;

		var output = [
			"Parameters failed for "+intent_name
		];

		for(var field in request.parameters.data) {
			if(!request.parameters.data[field].valid) {
				output.push(request.parameters.data[field].name+' was not provided');
			}
		}

		return output;
	}

}

