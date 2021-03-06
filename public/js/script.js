var users = [
{
	name: 'Lucky',
	gender: 'F',
	hobby: 'pets',
	avatar: 'avatar1.png'
},
{
	name: 'Betty',
	gender: 'F',
	hobby: 'sports',
	avatar: 'avatar2.png'
},
{
	name: 'Ronald',
	gender: 'M',
	hobby: 'music',
	avatar: 'avatar3.png'
},
{
	name: 'Christoppher',
	gender: 'M',
	hobby: 'sports',
	avatar: 'avatar4.png'
},
];


window.addEventListener('load', function(){

	var result = document.getElementById('results');
	
	function search() {
		
		//get hobby
		var hobbyField = document.getElementById('hobby');
		var hobby = hobbyField.value;

		//get gender
		var genderField = document.getElementById('gender');
		var s = genderField.selectedIndex;
		var gender = genderField.options[s].value;

		var resultsHtml = '';
		var usersLength = users.length;

		for (var i=0; i< usersLength; i++) {
	
			//check gender
			if ( gender == 'A' || gender == users[i].gender) {
				//check hobby
				if (hobby == '' || hobby == users[i].hobby) {
					resultsHtml += '<div class="person-row">\
						<img src="images/' + users[i].avatar + '" />\
						<div class="person-info">\
						<div>' + users[i].name + '</div>\
						<div>' + users[i].hobby + '</div></div>\
						<button>Add as friend</button></div>';
				}
			}
		}
		results.innerHTML = resultsHtml;
	}

	var searchBtn = document.getElementById('searchBtn');

	searchBtn.addEventListener('click', search);
});