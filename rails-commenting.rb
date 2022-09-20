# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# Collaborative effort with Echo 2022
# ---1) BlogsPostsController is inheriting from the ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) assigning active record query that shows all the blogposts
    @posts = BlogPost.all
  end

  # ---3) show method, stores the active record query to show a blogpost assigned the id passed as the parameter
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) displays html form to allow a user to create a new blogpost
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) creates a new blogpost in the data table using the blog_post_params
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) instance variable that will return the id that is bring called in the params
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) update the blogpost at the id using the params, sends a patch request to update data entry
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) destroy method removes a blogpost from the database, If there is an error, it redirects back to the post.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private is a method that is hidden from the user. this method is only accessed within the class
  private
  def blog_post_params
    # ---10)
    # STRONG PARAMS!!! I have been talking about this section a lot up above. The strong params are in charge of validation, they are in charge of what can and can not go into the database.
    # They are like the rules and guidelines that are set up so that the user cant totally break everything and all our hard work is wasted.
    # There is also hackers, hackers hate strong params becuase it makes their lives more difficult.
    # strong params are split in 2 sections. require and permit
    #  the .require(:blog_post) is saying hey, make sure everything coming up next in the permit section is the only stuff getting passed into my database in the model blogpost when using the methods create or update.
    # permit is saying yo, this is the only sutff going in my database. if its not these, dont let them in. you dont have to have a title, or a content, but you cant have anything else, so you might as well just do the title and content cause nothing else is getting in. 
    params.require(:blog_post).permit(:title, :content)
  end
end
