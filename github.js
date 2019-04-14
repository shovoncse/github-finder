class Github {
    constructor(){
        this.client_id = '65b44d46d520be1f19c7';
        this.client_secret = '7287ef205413001a79b30f0fbcc04416153ef797';
        this.repos_count   = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await  fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const reposResponse = await  fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}