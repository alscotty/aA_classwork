class FollowToggle{
  constructor(el){
    
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.clickHandler = 
    this.handleClick();
  }

  render(){
    // console.log("rendering!!");
    console.log(this.followState);
    if (this.followState === "followed"){
      this.$el.html("Unfollow!");
    }else{
      this.$el.html("Follow!");
    }
  }

  handleClick(e){

    let that = this;
    let state = this.followState;
    let request = (state === "followed") ? "DELETE" : "POST";
    console.log({request: request, state: this.followState});
    
    this.$el.on("click", (e) => {
      e.preventDefault();
      
      $.ajax({
        url: `/users/${this.userId}/follow`,
        type: request,
      //   success: function () {
      //     this.followState = (state === "followed") ?  "unfollowed" : "followed";
      //     setTimeout(that.render(), 1000);
      // },


        error: function(errorMessage){ console.log("error!!")}

      })
        .then(() => {
          this.followState = (state === "followed") ? "unfollowed" : "followed";
          that.render();
        });
    });

  }
}

module.exports = FollowToggle;