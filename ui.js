class UI{
    constructor(){
        this.profile = document.getElementById('profile')
    }

    // Display Profile
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a class="btn btn-primary btn-block mb-4" href="${user.html_url}" target="_blank">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary p-2 mb-1">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary p-2 mb-1">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success p-2 mb-1">Followers: ${user.followers}</span>
                <span class="badge badge-info p-2 mb-1">Following: ${user.following}</span>
                
                <ul class="list-group mt-4">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
                
            </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
        `;
    }

    // Clear Profile
    clearProfile(){
        this.profile.innerHTML = '';
    }

    //Show Alert 
    showAlert(msg, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.textContent = msg;
        const container = document.querySelector('.search-container');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);

        setTimeout(()=>{
            this.clearAlert();
        }, 3000);
    }

    // ClearAlert

    clearAlert(){
        const alert = document.querySelector('.alert');

        if(alert){
            alert.remove();
        }
    }

    // Show Repos
    showRepos(repos){
        const repoOutput = document.getElementById('repos');
        let output = '';
        repos.forEach(repo =>{
            output +=`
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <a class="mb-6" href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary p-2">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary p-2">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success p-2">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
        `;
        });        
        repoOutput.innerHTML = output;
    }
}
