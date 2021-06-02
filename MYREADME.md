# Getting started

*MAKE SURE YOU ARE NOT IN A DIRECTY THAT HAS A GIT REPO, IE A RAILS PROJECT OR REACT OR SOMETHING WHEN YOU DO THIS*

## Steps to clone

1. git clone git@github.com:katrina348/rails-react-starter.git <app_name_here>
2. cd <app_name_here>

### rails steps
** if you have unmatching ruby versions, follow these steps
** rm needs to be done in root of rails project.
- remove the  .ruby-version file `rm -r .ruby-version `
- remove the  Gemfile.lock `rm -r Gemfile.lock `
- in line 4 of Gemfile delete this line `ruby '2.7.?'`
- proceed with steps below

1. bundle
2. rename database to <app_name_here>
3. rails db:create db:migrate db:seed
4. rails s -p 3001

### react steps (in a separate terminal panel)
1. cd client  
2. yarn
3. yarn start

go to localhost:3000 to see react app
go to localhost:3001 to see rails app

### github steps
1. remove remote `git remote remove origin`
2. create new repo on github
3. add remote `git remote add <ssh_link_here>`