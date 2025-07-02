// JavaScript goes here.
let buttersscreen = document.querySelector('.buttersscreen');
let kylescreen = document.querySelector('.kylescreen');
let cartmanscreen = document.querySelector('.cartmanscreen');
let stanscreen = document.querySelector('.stanscreen');
let kennyscreen = document.querySelector('.kennyscreen');
    let question1 = document.querySelector('.question1');
    let question2 = document.querySelector('.question2');
    let question3 = document.querySelector('.question3');
    let question4 = document.querySelector('.question4');
        let q1 = document.querySelector('.q1');
        let q2 = document.querySelector('.q2');
        let q3 = document.querySelector('.q3');
        let q4 = document.querySelector('.q4');
        let q5 = document.querySelector('.q5');
            let crackers = document.querySelector('.crackers');
            let cheesypoofs = document.querySelector('.cheesypoofs');
            let sandwhich = document.querySelector('.sandwhich');
            let whatever = document.querySelector('.whatever');
            let apple = document.querySelector('.apple');
                let blue = document.querySelector('.blue');
                let green = document.querySelector('.green');
                let red = document.querySelector('.red');
                let yellow = document.querySelector('.yellow');
                let orange = document.querySelector('.orange');
                    let honest = document.querySelector('.honest');
                    let smart = document.querySelector('.smart');
                    let loud = document.querySelector('.loud');
                    let sweet = document.querySelector('.sweet');
                    let shy = document.querySelector('.shy');
                        let start = document.querySelector('.start')
                        let title = document.querySelector('.title')
question1.style.display = 'none';
question2.style.display = 'none';
question3.style.display = 'none';
question4.style.display = 'none';
stanscreen.style.display = 'none';
kylescreen.style.display = 'none';
cartmanscreen.style.display = 'none';
kennyscreen.style.display = 'none';
buttersscreen.style.display = 'none';




start.addEventListener('click', function(){
    title.style.display='none';
    question1.style.display='block';

});
cheesypoofs.addEventListener('click', function(){
    question1.style.display='none';
    question2.style.display='block';
    cartmanscore++;

});
crackers.addEventListener('click', function(){
    question1.style.display='none';
    question2.style.display='block';
    buttersscore++;

});
sandwhich.addEventListener('click', function(){
    question1.style.display='none';
    question2.style.display='block';
    stanscore++;

});
whatever.addEventListener('click', function(){
    question1.style.display='none';
    question2.style.display='block';
    kennyscore++;

});
apple.addEventListener('click', function(){
    question1.style.display='none';
    question2.style.display='block';
    kylescore++;


});
    

    blue.addEventListener('click', function(){
    question2.style.display='none';
    question3.style.display='block';
    stanscore++;

    });
    green.addEventListener('click', function(){
    question2.style.display='none';
    question3.style.display='block';
    kylescore++;

    });
    yellow.addEventListener('click', function(){
    question2.style.display='none';
    question3.style.display='block';
    buttersscore++;

    });
    red.addEventListener('click', function(){
    question2.style.display='none';
    question3.style.display='block';
    cartmanscore++;

    });
    orange.addEventListener('click', function(){
    question2.style.display='none';
    question3.style.display='block';
    kennyscore++;

    });


         honest.addEventListener('click', function(){
        question3.style.display='none';
        question4.style.display='block';
        stanscore++;

        });

         shy.addEventListener('click', function(){
        question3.style.display='none';
        question4.style.display='block';
        kennyscore++;

        });

         smart.addEventListener('click', function(){
        question3.style.display='none';
        question4.style.display='block';
        kylescore++;

        });

         loud.addEventListener('click', function(){
        question3.style.display='none';
        question4.style.display='block';
        cartmanscore++;

        });

         sweet.addEventListener('click', function(){
        question3.style.display='none';
        question4.style.display='block';
        buttersscore++;

        });

                q1.addEventListener('click', function(){
                question4.style.display='none';
                stanscore++;
                showWinner();

                });

                q2.addEventListener('click', function(){
                question4.style.display='none';
                cartmanscore++;
                showWinner();

                });

                q3.addEventListener('click', function(){
                question4.style.display='none';
                kylescore++;
                showWinner();

                });

                q4.addEventListener('click', function(){
                question4.style.display='none';
                kennyscore++;
                showWinner();

                });

                q5.addEventListener('click', function(){
                question4.style.display='none';
                buttersscore++;

                showWinner();

                });



  blue.addEventListener('mouseover', function(){
    blue.style.backgroundColor='#ADD8E6';
  });             
blue.addEventListener('mouseout', function(){
    blue.style.backgroundColor='white';
  });  

  green.addEventListener('mouseover', function(){
    green.style.backgroundColor='#8bd08b';
  });             
green.addEventListener('mouseout', function(){
    green.style.backgroundColor='white';
  });  

  red.addEventListener('mouseover', function(){
    red.style.backgroundColor='#eb4848';
  });             
red.addEventListener('mouseout', function(){
    red.style.backgroundColor='white';
  });  

  orange.addEventListener('mouseover', function(){
    orange.style.backgroundColor='#fdcc73';
  });             
orange.addEventListener('mouseout', function(){
    orange.style.backgroundColor='white';
  }); 
  
  yellow.addEventListener('mouseover', function(){
    yellow.style.backgroundColor='#fffdaf';
  });             
yellow.addEventListener('mouseout', function(){
    yellow.style.backgroundColor='white';
  });  
  

      let kennyscore = 0;
    let stanscore = 0;
    let cartmanscore = 0; 
    let buttersscore = 0;
    let kylescore = 0; 

    function showWinner() {
    if (kennyscore >= stanscore && kennyscore >= cartmanscore && kennyscore >= buttersscore && kennyscore >= kylescore) {
    kennyscreen.style.display = 'block';
  } else if (stanscore >= kennyscore && stanscore >= cartmanscore && stanscore >= buttersscore && stanscore >= kylescore) {
    stanscreen.style.display = 'block';
  } else if (cartmanscore >= kennyscore && cartmanscore >= stanscore && cartmanscore >= buttersscore && cartmanscore >= kylescore) {
    cartmanscreen.style.display = 'block';
  } else if (buttersscore >= kennyscore && buttersscore >= stanscore && buttersscore >= cartmanscore && buttersscore >= kylescore) {
    buttersscreen.style.display = 'block';
  } else if (kylescore >= kennyscore && kylescore >= stanscore && kylescore >= cartmanscore && kylescore >= buttersscore) {
    kylescreen.style.display = 'block';
  }
}

cheesypoofs.addEventListener('mouseover', function(){
  cheesypoofs.style.fontSize= '45px';
});
cheesypoofs.addEventListener('mouseout', function(){
  cheesypoofs.style.fontSize= '40px';
});
apple.addEventListener('mouseover', function(){
  apple.style.fontSize= '45px';
});
apple.addEventListener('mouseout', function(){
  apple.style.fontSize= '40px';
});
    sandwhich.addEventListener('mouseover', function(){
  sandwhich.style.fontSize= '45px';
});
sandwhich.addEventListener('mouseout', function(){
  sandwhich.style.fontSize= '40px';
});

crackers.addEventListener('mouseover', function(){
  crackers.style.fontSize= '45px';
});
crackers.addEventListener('mouseout', function(){
  crackers.style.fontSize= '40px';
});

whatever.addEventListener('mouseover', function(){
  whatever.style.fontSize= '45px';
});
whatever.addEventListener('mouseout', function(){
  whatever.style.fontSize= '40px';
});



    honest.addEventListener('mouseover', function(){
    honest.style.fontSize= '45px';
    });
    honest.addEventListener('mouseout', function(){
    honest.style.fontSize= '40px';
    });

    smart.addEventListener('mouseover', function(){
    smart.style.fontSize= '45px';
    });
    smart.addEventListener('mouseout', function(){
    smart.style.fontSize= '40px';
    });

    loud.addEventListener('mouseover', function(){
    loud.style.fontSize= '45px';
    });
    loud.addEventListener('mouseout', function(){
    loud.style.fontSize= '40px';
    });

    shy.addEventListener('mouseover', function(){
    shy.style.fontSize= '45px';
    });
    shy.addEventListener('mouseout', function(){
    shy.style.fontSize= '40px';
    });

    sweet.addEventListener('mouseover', function(){
    sweet.style.fontSize= '45px';
    });
    sweet.addEventListener('mouseout', function(){
    sweet.style.fontSize= '40px';
    });


          q1.addEventListener('mouseover', function(){
          q1.style.fontSize= '45px';
          });
          q1.addEventListener('mouseout', function(){
          q1.style.fontSize= '40px';
          });

          q2.addEventListener('mouseover', function(){
          q2.style.fontSize= '45px';
          });
          q2.addEventListener('mouseout', function(){
          q2.style.fontSize= '40px';
          });

          q3.addEventListener('mouseover', function(){
          q3.style.fontSize= '45px';
          });
          q3.addEventListener('mouseout', function(){
          q3.style.fontSize= '40px';
          });

          q4.addEventListener('mouseover', function(){
          q4.style.fontSize= '45px';
          });
          q4.addEventListener('mouseout', function(){
          q4.style.fontSize= '40px';
          });

          q5.addEventListener('mouseover', function(){
          q5.style.fontSize= '45px';
          });
          q5.addEventListener('mouseout', function(){
          q5.style.fontSize= '40px';
          });












            

