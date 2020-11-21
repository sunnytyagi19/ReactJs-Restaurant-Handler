import { DISHES } from "../shared/dishes";
import * as ActionType from "./ActionType";
import {baseUrl} from "../shared/baseUrl";

export const addComment = (comment) => ({
    type: ActionType.ADD_COMENT,
    payload: comment
});

export const postComment=(dishId,rating,author,comment)=>(dispatch)=>{
    const newComment={
        dishId: dishId,
        rating:rating,
        author:author,
        comment:comment
    };
    newComment.date=new Date().toISOString();
    return fetch(baseUrl +"comments",{
        method:"POST",
        body:JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
          },
          credentials: "same-origin"
    }).then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      }).then(response => response.json())
      .then(response => dispatch(addComment(response)))
      .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
}

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading(true));

    return fetch(baseUrl+"dishes").then(
        response=>{
            if (response.ok){
                return response;
            }else{
                var error= new Error("Error "+response.status+" "+response.statusText);
                error.response=response;
                throw error;
            }
        },error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(
        response=>response.json()
    ).then(
        dishes=>dispatch(addDishes(dishes))
    ).catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading=()=>({
    type:ActionType.DISHES_LOADING
})

export const addDishes=(dishes)=>({
    type:ActionType.ADD_DISHES,
    payload:dishes
})

export const dishesFailed = (errmess) => ({
    type: ActionType.DISHES_FAILED,
    payload: errmess
});
export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments').then(
        response=>{
            if (response.ok){
                return response;
            }else{
                var error= new Error("Error "+response.status+" "+response.statusText);
                error.response=response;
                throw error;
            }
        },error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments))).catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionType.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionType.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions').then(
        response=>{
            if (response.ok){
                return response;
            }else{
                var error= new Error("Error "+response.status+" "+response.statusText);
                error.response=response;
                throw error;
            }
        },error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos))).catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionType.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionType.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionType.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) => {
    
    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders').then(
        response=>{
            if (response.ok){
                return response;
            }else{
                var error= new Error("Error "+response.status+" "+response.statusText);
                error.response=response;
                throw error;
            }
        },error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addLeaders(promos))).catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionType.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionType.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionType.ADD_LEADERS,
    payload: leaders
});

export const addFeedback = (feedback) => ({
    type: ActionType.ADD_FEEDBACK,
    payload: feedback
});

export const postFeedback=(firstname,lastname,telnum,email,agree,contactType,message)=>(dispatch)=>{
    const newFeedback={
        firstname: firstname,
        lastname:lastname,
        telnum:telnum,
        email:email,
        agree:agree,
        contactType:contactType,
        message:message
    };
    newFeedback.date=new Date().toISOString();
    return fetch(baseUrl +"feedback",{
        method:"POST",
        body:JSON.stringify(newFeedback),
        headers: {
            "Content-Type": "application/json"
          },
          credentials: "same-origin"
    }).then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      }).then(response => response.json())
      .then(response => dispatch(addFeedback(response)))
      .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
}