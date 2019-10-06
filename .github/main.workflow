workflow "Deploy to cloud" {
  on = "master"
  resolves = ["deploy"]
}

action "deploy" {
  uses = "maddox/actions/ssh@master"
  args = "./deploy.sh"
  secrets = [
    "PRIVATE_KEY",
    "HOST",
    "USER"
  ]
}