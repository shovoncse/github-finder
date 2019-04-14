// Init Github
const github = new Github;
// Init UI
const ui = new UI;
const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {

    const searchText = e.target.value;
    if(searchText !== ''){
        github.getUser(searchText).then(data => {
            if(data.profile.message === 'Not Found'){
                //Show Alert
                ui.showAlert('User Not Found!', 'alert alert-danger')
            }else{
                //Show Profile
                ui.showProfile(data.profile);
                // Show repos
                ui.showRepos(data.repos);
                //console.log(data.profile)
            }
        });
    }else{
        // Clear Profile
        ui.clearProfile();
    }
});