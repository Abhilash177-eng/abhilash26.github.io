var n,a;
function work()     {
           a=document.getElementById("a1").value;
           var b=document.getElementById("a2").value;
           var e=document.getElementById("a5").value;
           e=parseInt(e);
           var f=document.getElementById("a6").value;
           f=parseInt(f);
           var g=document.getElementById("a7").value;
           g=parseInt(g);
           var h=document.getElementById("a8").value;
           var vd;
           
           if(h<=0)
          {
          alert("Maximum mark cant be less than or equal to 0");
          h=prompt("Maximum mark");
          h=parseInt(h);
          while(h<=0)
          {
          alert("Maximum mark cant be less than or equal to 0");
          h=prompt("Maximum mark");
          h=parseInt(h);
          }
         
          } 
          var check;
          check=e+f+g;
            var check1=0;
            if(check<n)
            {
              alert("The value which you have entered in the field of right,wrong,partial is less than total number of students");
              e=prompt("Total number of students who got it right");
              e=parseInt(e);
              f=prompt("Total number of students who got it wrong");
              f=parseInt(f);
              g=prompt("Total number of students who got it partial");
              g=parseInt(g);
              check1=e+f+g;
              while(check1!=n)
              {
                alert("The value which you have entered in the field of right,wrong,partial  dosent match the total number of students");
              e=prompt("Total number of students who got it right");
              e=parseInt(e);
              f=prompt("Total number of students who got it wrong");
              f=parseInt(f);
              g=prompt("Total number of students who got it partial");
              g=parseInt(g);
              check1=e+f+g;
              
              }

            }

            else if(check>n)
            {
              alert("The value which you have entered in the field of right,wrong,partial higher than the total number of students");
              e=prompt("Total number of students who got it right");
              e=parseInt(e);
              f=prompt("Total number of students who got it wrong");
              f=parseInt(f);
              g=prompt("Total number of students who got it partial");
              g=parseInt(g);
              check1=e+f+g;
              while(check1!=n)
              {
                alert("The value which you have entered in the field of right,wrong,partial dosent match with total number of students");
              e=prompt("Total number of students who got it right");
              e=parseInt(e);
              f=prompt("Total number of students who got it wrong");
              f=parseInt(f);
              g=prompt("Total number of students who got it partial");
              g=parseInt(g);
              check1=e+f+g;
            
              }
            }

            check=0;
            check1=0;

           
          if(a==1)
          {
            var sum=0;
            var sum1=0;
            var sum2=0;
            var z=0;
            var k1=new Array();
            var k2=new Array();
            var k3=new Array();
            var j3=new Array();
            for(var i=0;i<n;i++)
            {
               var ss=i+1;
               
                k1[i]=document.getElementById('id1'+ss).value;
                vd=k1[i];
                if(vd<=0)
                {
                  alert("time cant be less than or equal to 0");
                  k1[i]=prompt("Time taken by student"+i+1);
                  k1[i]=parseInt(k1[i]);
                  while(k1[i]<=0)
                  {
                    alert("time cant be less than or equal to 0");
                    k1[i]=prompt("Time taken by student"+i+1);
                    k1[i]=parseInt(k1[i]);
                  }
                }
                k2[i]=document.getElementById('id2'+ss).value;
                k3[i]=document.getElementById('id3'+ss).value;
                j3[i]=document.getElementById('f'+ss).value;
            }

            for(var i=0;i<n;i++)
            {
                 sum=sum+parseInt(k1[i]);
                 sum1=sum1+parseInt(k2[i]);
                 sum2=sum2+parseInt(k3[i]);
                 z=z+parseInt(j3[i]);

            }
            var avgt=sum/n;
            var avgh=sum1/n;
            var avgc=sum2/n;
            var es=0,md=0,hr=0;
            var es1=0,md1=0,hr1=0;
            var es2=0,md2=0,hr2=0;
            var es3=0,md3=0,hr3=0;
            var tcl=0,hcl=0,chcl=0;
            var fcount=0,scount=0,secount=0,fecl=0;
            for(var i=0;i<n;i++)
            {
               if(j3[i]==1)
               {
                 es3=es3+1;
               }  

               else if(j3[i]==2)
               {
                 md3=md3+1;
               }  

               else
               {
                 hr3=hr3+1;
               }

            }
            if(es3==md3&&md3==hr3&&hr3==es3)
            {
              fecl=6;
            }
            else if(hr3>es3&&hr3>md3)
            {
              fecl=7;
            }
           else if(es3>md3&&es3>hr3)
            {
                 fecl=5;
               
            }
            else if(md3>es3&&md3>hr3)
            {
              fecl=6;
            }
            else if(es3>md3&&hr3>md3)
            {
               if(es3>hr3)
               {
                 fecl=5;
            
               }
               else if(es3==hr3)
               {
                 fecl=6;
              
               }

               else if(hr3>es3)
               {
                 fecl=7;
              
               }
            }
            else if(es3>hr3&&md3>hr3)
            {
               if(es3>md3)
               {
                 fecl=5;
            
               }
               else if(es3==md3)
               {
                 fecl=6;
              
               }

               else if(md3>es3)
               {
                 fecl=6;
              
               }
            }
            else if(es3<md3&&es3>hr3)
            {
                  fecl=6;
            
            }

           else if(es3<md3&&es3<hr3)
            {

                if(md3>hr3)
                {
                    fecl=6;
                   
                }

                else
                {
                    fecl=7;
                  

                }

            }
            else if(hr3>es3&&h3>md3)
            {
              fecl=7;
            }

    

            else if(hr3>es3&&md3>es3)
            {
              if(md3>hr3)
              {
              fecl=6;
              }
              else if(hr3>md3)
              {
                fecl=7;
              }
              else if(hr3==md3)
              {
                fecl=7;
              }
            }

            else if(es3==md3&&es3>hr3&&md3>hr3)
            {
              fecl=5;
            }
            else if(es3==hr3&&es3>md3&&hr3>md3)
            {
              fecl=6;
            }
            else if(md3==hr3&&md3>ed3&&hr3>es3)
            {
              fecl=7;
            }
            else
            {
              fecl=6;
            }
            for(var i=0;i<n;i++)
            {
               if(k1[i]<avgt)
               {
                 es=es+1;
               }  

               else if(k1[i]==avgt)
               {
                 md=md+1;
               }  

               else
               {
                 hr=hr+1;
               }

            }
          if(avgt<=1)
          {
              tcl=5;
              fcount+=1;
          }
            else if(es>md&&es>hr)
            {
                 tcl=5;
                 fcount+=1;
            }
            else if(es>md&&hr>md)
            {
               if(es>hr)
               {
                 tcl=5;
                 fcount+=1;
               }
               else if(es==hr)
               {
                 tcl=6;
                 scount+=1;
               }

               else if(hr>es)
               {
                 tcl=7;
                 secount+=1;
               }
            }


            else if(es>hr&&md>hr)
            {
               if(es>md)
               {
                 tcl=5;
                 fcount+=1;
               }
               else if(es==md)
               {
                 tcl=5;
                 fcount+=1;
               }

               else if(md>es)
               {
                 tcl=6;
                 scount+=1;
               }
            }


            else if(es<md&&es>hr)
            {
                  tcl=6;
                  scount+=1;
            }

           else if(es<md&&es<hr)
            {

                if(md>hr)
                {
                    tcl=6;
                    scount+=1;
                }

                else
                {
                    tcl=7;
                    secount+=1;

                }

            }

            else if(md>hr)
            {
              tcl=6;
              scount+=1;
            }
            else if(es==md&&md==hr&&hr==es)
            {
              tcl=6;
              scount+=1;
            }
            else
            {
              tcl=7;
              secount+=1;
            }  
                     
            for(var i=0;i<n;i++)
            {
               if(k2[i]<avgh)
               {
                 es2=es2+1;
               }  
               else if(k2[i]==avgh)
               {
                 md2=md2+1;
               }  
               else
               {
                 hr2=hr2+1;
               }
            }
            if(hcl<=1)
            {
                   hcl=5;
                 fcount+=1;
            }
           else if(es2>md2&&es2>hr2)
            {
                 hcl=5;
                 fcount+=1;
            }
            else if(es2>md2&&hr2>md2)
            {
               if(es2>hr2)
               {
                 hcl=5;
                 fcount+=1;
               }
               else if(es2==hr2)
               {
                 hcl=6;
                 scount+=1;
               }

               else if(hr2>es2)
               {
                 chcl=7;
                 secount+=1;
               }
            }

            else if(es2>hr2&&md2>hr2)
            {
               if(es2>md2)
               {
                 hcl=5;
                 fcount+=1;
               }
               else if(es2==md2)
               {
                 hcl=5;
                 fcount+=1;
               }

               else if(md2>es2)
               {
                 chcl=6;
                 scount+=1;
               }
            }
            else if(es2<md2&&es2>hr2)
            {
                  hcl=6;
                  scount+=1;
            }
           else if(es2<md2&&es2<hr2)
            {
               if(md2>hr2)
                {
                    hcl=6;
                    scount+=1;
                }

                else
                {
                    hcl=7;
                    secount+=1;
                }

            }
            else if(md2>hr2)
            {
              hcl=6;
              scount+=1;
            }
            else if(es2==md2&&md2==hr2&&hr2==es2)
            {
              hcl=6;
              scount+=1;
            }
            else
            {
              hcl=7;
              secount+=1;
            }
       
            for(var i=0;i<n;i++)
            {
               if(k3[i]<avgc)
               {
                 es1=es1+1;
               }  

               else if(k3[i]==avgc)
               {
                 md1=md1+1;
               }  

               else
               {
                 hr1=hr1+1;
               }

            }
            if(avgc<=1)
            {
              chcl=5;
              fcount+=1;
            }
            else if(es1>md1&&es1>hr1)
            {
                 chcl=5;
                 fcount+=1;
            }

            else if(es1>md1&&hr1>md1)
            {
               if(es1>hr1)
               {
                 chcl=5;
                 fcount+=1;
               }
               else if(es1==hr1)
               {
                 chcl=6;
                 scount+=1;
               }

               else if(hr1>es1)
               {
                 chcl=7;
                 secount+=1;
               }
            }

            else if(es1>hr1&&md1>hr1)
            {
               if(es1>md1)
               {
                 chcl=5;
                 fcount+=1;
               }
               else if(es1==md1)
               {
                 chcl=5;
                 fcount+=1;
               }

               else if(md1>es1)
               {
                 chcl=6;
                 scount+=1;
               }
            }

            else if(es1<md1&&es1>hr1)
            {
                  chcl=6;
                  scount+=1;
            }

           else if(es1<md1&&es1<hr1)
            {

                if(md1>hr1)
                {
                    chcl=6;
                    scount+=1;
                }

                else
                {
                    chcl=7;
                    secount+=1;
                }

            }
            else if(md1>hr1)
            {
              chcl=6;
              scount+=1;
            }
            else if(es1==md1&&md1==hr1&&hr1==es1)
            {
              chcl=6;
              scount+=1;
            }
            else
            {
              chcl=7;
              secount+=1;
            } 
                 
            var sec1=0;

            if(fcount>scount&&fcount>secount)
             {
                sec1=5;
             }  

            else if(fcount>scount&&secount>scount)
            {
                if(fcount>secount)
                {
                  sec1=5;
                }
                else if(secount>fcount)
                {
                  sec1=7;
                }

                else if(fcount==secount)
                {
                  sec1=6;
                }
            
              
            }
            

            else if(scount>fcount&&secount>fcount)
            {
              if(scount>secount)
              {
                sec1=6;
              }
              else if(secount>scount)
              {
                sec1=7;
              }

              else if(scount==secount)
              {
                sec1=7;
              }
            }
            
            else if(fcount>=scount&&fcount>secount&&scount>secount)
            {
                if(fcount>scount)
                {
                  sec1=5;
                }

                

                else if(fcount==scount)
                {
                  sec1=5;
                }


            }

            else if(scount>=secount)
            {
              if(scount>secount)
              {
                  sec1=6;
              }

            
              else{
                sec1==7;
              }
            }

            else if(secount>=scount)
            {
              if(secount>scount)
              {
                  sec1=7;
              }

              else if(secount==scount)
              {
                sec1=7;
              }
            }

            
             var klr=h;
             var fail,pass;
             var sec2=0;
              if(e>f&&e>g)
              {
                 sec2=5;
              }

              else if(f>g&&f>e)
              {
                sec2=7;
              }

              else if(g>e&&g>f)
              {
                sec2=6;
              }

              else if(e>=f&&e>g&&f>g)
              {

                if(e>f)
                {
                 sec2=5;
                }

                else
                {
                  sec2=6;
                }

              }


              else if(e>=g&&e>f&&g>f)
              {

                if(e>g)
                {
                 sec2=5;
                }

                else
                {
                  sec2=6;
                }

              }

              else if(f>=g&&f>e&&g>e)
              {
                if(f>g)
                {
                 sec2=7;
                }

                else
                {
                  sec2=7;
                }
              }

              else if(f>=e&&f>g&&e>g)
              {
                if(f>e)
                {
                 sec2=7;
                }

                else
                {
                  sec2=6;
                }
              }

              else if(g>=e&&g>f&&e>f)
              {
                if(g>e)
                {
                 sec2=6;
                }

                else
                {
                  sec2=5;
                }
              }

              else if(g>=f&&g>e&&f>e)
              {
                if(g>f)
                {
                 sec2=6;
                }

                else
                {
                  sec2=7;
                }
              }


              else
              {
                sec2=6;
              }           
            var tnt=0;
            if(sec1==5&&sec2==6 || sec1==6&&sec2==5)
            {
               tnt=6;
            }

            else if(sec1==5&&sec2==5)
            {
              tnt=5;
            }

            else if(sec1==6&&sec2==6)
            {
              tnt=6;
            }

            else if(sec1==7&&sec2==7)
            {
              tnt=7;
            }


            else if(sec1==5&&sec2==7 || sec2==5&&sec1==7)
            {
              tnt=6;
            }

            else if(sec1==7&&sec2==6 || sec2==7&&sec1==6)
            {
              tnt=7;
            }

            if(tnt==5)
            {
              if(fecl==7)
              {
                
                document.getElementById("demo").innerHTML = "HARD";
                
              }
              else{
                
                document.getElementById("demo").innerHTML = "EASY";
              }
            }

            else if(tnt==6)
            {
              if(fecl==5)
              {
                
                document.getElementById("demo").innerHTML = "EASY";
              }
              else
              {
                
                document.getElementById("demo").innerHTML = "MEDIUM";
              }
            }
   
           else if(tnt==7)
           {
             if(fecl==6||fecl==5)
             {
               
              document.getElementById("demo").innerHTML = "MEDIUM";
             }
             else
             {
               
              document.getElementById("demo").innerHTML = "HARD";
             }
           }

         }
          if(a==2)
          {
            var x=0;
            var y=0;
            var z=0;
            var j1=new Array();
            var j2=new Array();
            var j3=new Array();
            
            for(var i=0;i<n;i++)
            {
               var ss=i+1;
               
                j1[i]=document.getElementById('id1'+ss).value;
                vd=j1[i];
                if(vd<=0)
                {
                  alert("time cant be less than or equal to 0");
                  j1[i]=prompt("Time taken by student"+i+1);
                  j1[i]=parseInt(j1[i]);
                  while(j1[i]<=0)
                  {
                    alert("time cant be less than or equal to 0");
                    j1[i]=prompt("Time taken by student"+i+1);
                    j1[i]=parseInt(j1[i]);
                  }
                }
                j2[i]=document.getElementById('id2'+ss).value;
                j3[i]=document.getElementById('f'+ss).value;
            }
  
            for(var i=0;i<n;i++)
            {
                 x=x+parseInt(j1[i]);
                 y=y+parseInt(j2[i]);
                 z=z+parseInt(j3[i]);
            }
          
           
            var avgt=x/n;
            var avgc=y/n;
            var es=0,md=0,hr=0;
            var es1=0,md1=0,hr1=0;
            var es3=0,md3=0,hr3=0;
            var tcl=0,hcl=0;
            var fcount=0,scount=0,secount=0,fecl=0;
          
      
            for(var i=0;i<n;i++)
            {
               if(j3[i]==1)
               {
                 es3=es3+1;
               }  

               else if(j3[i]==2)
               {
                 md3=md3+1;
               }  

               else
               {
                 hr3=hr3+1;
               }

            }
            if(es3>md3&&es3>hr3)
            {
                 fecl=5;
               
            }
            else if(es3>md3&&hr3>md3)
            {
               if(es3>hr3)
               {
                 fecl=5;
            
               }
               else if(es3==hr3)
               {
                 fecl=6;
              
               }

               else if(hr3>es3)
               {
                 fecl=7;
              
               }
            }
            else if(es3>hr3&&md3>hr3)
            {
               if(es3>md3)
               {
                 fecl=5;
            
               }
               else if(es3==md3)
               {
                 fecl=6;
              
               }

               else if(md3>es3)
               {
                 fecl=6;
              
               }
            }
            else if(es3<md3&&es3>hr3)
            {
                  fecl=6;
            
            }

           else if(es3<md3&&es3<hr3)
            {

                if(md3>hr3)
                {
                    fecl=6;
                   
                }

                else
                {
                    fecl=7;
                  

                }

            }
            else if(hr3>es3&&h3>md3)
            {
              fecl=7;
            }

            else if(md3>es3&&md3>hr3)
            {
              fecl=6;
            }

            else if(es3>hr3&&md3>hr3)
            {
              if(md3>es3)
              {
               fecl=6;
              }
              else if(es3>md3)
              {
                fecl=5;
              }
              else if(es3==md3)
              {
                fecl=5;
              }
            }

            else if(es3==md3&&es3>hr3&&md3>hr3)
            {
              fecl=5;
            }
            else if(es3==hr3&&es3>md3&&hr3>md3)
            {
              fecl=6;
            }
            else if(md3==hr3&&md3>ed3&&hr3>es3)
            {
              fecl=7;
            }
            else
            {
              fecl=6;
            }
            for(var i=0;i<n;i++)
            {
               if(j1[i]<avgt)
               {
                 es=es+1;
               }  

               else if(j1[i]==avgt)
               {
                 md=md+1;
               }  

               else
               {
                 hr=hr+1;
               }

            }  
            if(avgt<=1)
            {
              tcl=5;
              fcount+=1;
            }
            else if(es>md&&es>hr)
            {
                 tcl=5;
                 fcount+=1;
            }
            else if(es>md&&hr>md)
            {
               if(es>hr)
               {
                 tcl=5;
                 fcount+=1;
               }
               else if(es==hr)
               {
                 tcl=6;
                 scount+=1;
               }

               else if(hr>es)
               {
                 tcl=7;
                 secount+=1;
               }
            }

            else if(es>hr&&md>hr)
            {
               if(es>md)
               {
                 tcl=5;
                 fcount+=1;
               }
               else if(es==md)
               {
                 tcl=5;
                 fcount+=1;
               }

               else if(md>es)
               {
                 tcl=6;
                 scount+=1;
               }
            }
            else if(es<md&&es>hr)
            {
                  tcl=6;
                  scount+=1;
            }

           else if(es<md&&es<hr)
            {

                if(md>hr)
                {
                    tcl=6;
                    scount+=1;
                }

                else
                {
                    tcl=7;
                    secount+=1;

                }
            }
            else if(md>hr)
            {
              tcl=6;
              scount+=1;
            }
            else if(es==md&&md==hr&&hr==es)
            {
              tcl=6;
              scount+=1;
            }
            else
            {
              tcl=7;
              secount+=1;
            }
         
            for(var i=0;i<n;i++)
            {
               if(j2[i]<avgc)
               {
                 es1=es1+1;
               }  

               else if(j2[i]==avgc)
               {
                 md1=md1+1;
               }  

               else
               {
                 hr1=hr1+1;
               }

            }
            if(avgc<=1)
            {
              hcl=5;
              fcount+=1;
            }
            else if(es1>md1&&es1>hr1)
            {
                 hcl=5;
                 fcount+=1;
            }
            else if(es1>md1&&hr1>md1)
            {
               if(es1>hr1)
               {
                 hcl=5;
                 fcount+=1;
               }
               else if(es1==hr1)
               {
                 hcl=6;
                 scount+=1;
               }

               else if(hr1>es1)
               {
                 hcl=7;
                 secount+=1;
               }
            }
            else if(es1>hr1&&md1>es1)
            {
               if(es1>md1)
               {
                 hcl=5;
                 fcount+=1;
               }
               else if(es1==md1)
               {
                 hcl=5;
                 fcount+=1;
               }

               else if(md1>es1)
               {
                 hcl=6;
                 scount+=1;
               }
            }
            else if(es1<md1&&es1>hr1)
            {
                  hcl=6;
                  scount+=1;
            }
           else if(es1<md1&&es1<hr1)
            {

                if(md1>hr1)
                {
                    hcl=6;
                    scount+=1;
                }

                else
                {
                    hcl=7;
                    secount+=1;
                }

            }
            else if(md1>hr1)
            {
              hcl=6;
              scount+=1;
            }
            else if(es1==md1&&md1==hr1&&hr1==es1)
            {
              hcl=6;
              scount+=1;
            }
            else
            {
              hcl=7;
              secount+=1;
            }  


            var sec1=0;

            if(fcount>scount&&fcount>secount)
             {
                sec1=5;
                
             }

            else if(fcount>scount&&secount>scount)
            {
                if(fcount>secount)
                {
                  sec1=5;
                }
                else if(secount>fcount)
                {
                  sec1=7;
                }

                else if(fcount==secount)
                {
                  sec1=6;
                }
            
              
            }
            

            else if(scount>fcount&&secount>fcount)
            {
              if(scount>secount)
              {
                sec1=6;
              }
              else if(secount>scount)
              {
                sec1=7;
              }

              else if(scount==secount)
              {
                sec1=7;
              }
            }
            
            else if(fcount>=scount&&fcount>secount&&scount>secount)
            {
                if(fcount>scount)
                {
                  sec1=5;
                }

             

                else if(fcount==scount)
                {
                  sec1=5;
                }


            }

            else if(scount>=secount)
            {
              if(scount>secount)
              {
                  sec1=6;
              }

            
              else{
                sec1==7;
              }
            }

            else if(secount>=scount)
            {
              if(secount>scount)
              {
                  sec1=7;
              }

              else if(secount==scount)
              {
                sec1=7;
              }
            }
            
             var klr=h;
             var fail,pass;
             var sec2=0;          
             if(e>f&&e>g)
              {
                 sec2=5;
              }

              else if(f>g&&f>e)
              {
                sec2=7;
              }

              else if(g>e&&g>f)
              {
                sec2=6;
              }

              else if(e>=f&&e>g&&f>g)
              {

                if(e>f)
                {
                 sec2=5;
                }

                else
                {
                  sec2=6;
                }

              }


              else if(e>=g&&e>f&&g>f)
              {

                if(e>g)
                {
                 sec2=5;
                }

                else
                {
                  sec2=6;
                }

              }

              else if(f>=g&&f>e&&g>e)
              {
                if(f>g)
                {
                 sec2=7;
                }

                else
                {
                  sec2=7;
                }
              }

              else if(f>=e&&f>g&&e>g)
              {
                if(f>e)
                {
                 sec2=7;
                }

                else
                {
                  sec2=6;
                }
              }

              else if(g>=e&&g>f&&e>f)
              {
                if(g>e)
                {
                 sec2=6;
                }

                else
                {
                  sec2=5;
                }
              }

              else if(g>=f&&g>e&&f>e)
              {
                if(g>f)
                {
                 sec2=6;
                }

                else
                {
                  sec2=7;
                }
              }


              else
              {
                sec2=6;
              }                    
            var tnt=0;
            if(sec1==5&&sec2==6 || sec1==6&&sec2==5)
            {
               tnt=6;
            }
            else if(sec1==5&&sec2==5)
            {
              tnt=5;
            }
            else if(sec1==6&&sec2==6)
            {
              tnt=6;
            }
            else if(sec1==7&&sec2==7)
            {
              tnt=7;
            }
            else if(sec1==5&&sec2==7 || sec2==5&&sec1==7)
            {
              tnt=6;
            } 
            else if(sec1==6&&sec2==7 || sec2==6&&sec1==7)
            {
              tnt=7;
            }

            else if(sec1==7&&sec2==6 || sec2==6&&sec1==7)
            {
              tnt=7;
            }
           
            if(tnt==5)
            {
              if(fecl==7)
              {
                document.getElementById("demo").innerHTML = "HARD";
                
              }
              else{
                document.getElementById("demo").innerHTML = "EASY";
              }
            }

            else if(tnt==6)
            {
              if(fecl==5)
              {
                document.getElementById("demo").innerHTML = "EASY";
              }
              else
              {
                document.getElementById("demo").innerHTML = "MEDIUM";
              }
            }
   
           else if(tnt==7)
           {
             if(fecl==6||fecl==5)
             {
              document.getElementById("demo").innerHTML = "MEDIUM";
             }
             else
             {
              document.getElementById("demo").innerHTML = "HARD";
             }
           }
            
          }
          
        

          
          if(a==3)
          {
            var sum=0;
            var sum1=0;
            var sum2=0;
            var k1=new Array();
            var k2=new Array();
            var k3=new Array();
            var j3=new Array();
            var ak;
            for(var i=0;i<n;i++)
            {
               var ss=i+1;
               
                k1[i]=document.getElementById('id1'+ss).value;
                vd=k1[i];
                if(vd<=0)
                {
                  alert("time cant be less than or equal to 0");
                  k1[i]=prompt("Time taken by student"+i+1);
                  k1[i]=parseInt(k1[i]);
                  while(k1[i]<=0)
                  {
                    alert("time cant be less than or equal to 0");
                    k1[i]=prompt("Time taken by student"+i+1);
                    k1[i]=parseInt(k1[i]);
                  }
                }
                k2[i]=document.getElementById('id2'+ss).value;
                ak=k2[i];
                if(ak<1)
                {
                  alert("The total number of times the program compiled cant be less than 1");
                  k2[i]=prompt("count of program compiled");
                  k2[i]=parseInt(k2[i]);
                  while(k2[i]<=0)
                  {
                    alert("The total number of times the program compiled cant be less than 1");
                    k1[i]=prompt("count of program compiled");
                    k2[i]=parseInt(k2[i]);
                  }
                }
                k3[i]=document.getElementById('id3'+ss).value;
                j3[i]=document.getElementById('f'+ss).value;
            }
            for(var i=0;i<n;i++)
            {
                 sum=sum+parseInt(k1[i]);
                 sum1=sum1+parseInt(k2[i]);
                 sum2=sum2+parseInt(k3[i]);
            }
            var avgt=sum/n;
            var avgc=sum1/n;
            var avgh=sum2/n;
            var es=0,md=0,hr=0;
            var es1=0,md1=0,hr1=0;
            var es2=0,md2=0,hr2=0;
            var es3=0,md3=0,hr3=0;
            var tcl=0,hcl=0,ccl=0;
            var fcount=0,scount=0,secount=0,fecl=0;
            for(var i=0;i<n;i++)
            {
               if(j3[i]==1)
               {
                 es3=es3+1;
               }  

               else if(j3[i]==2)
               {
                 md3=md3+1;
               }  

               else
               {
                 hr3=hr3+1;
               }

            }
  
            if(es3>md3&&es3>hr3)
            {
                 fecl=5;
               
            }
            else if(es3>md3&&hr3>md3)
            {
               if(es3>hr3)
               {
                 fecl=5;
            
               }
               else if(es3==hr3)
               {
                 fecl=6;
              
               }

               else if(hr3>es3)
               {
                 fecl=7;
              
               }
            }
            else if(es3>hr3&&md3>hr3)
            {
               if(es3>md3)
               {
                 fecl=5;
            
               }
               else if(es3==md3)
               {
                 fecl=6;
              
               }

               else if(md3>hr3)
               {
                 fecl=7;
              
               }
            }
            else if(es3<md3&&es3>hr3)
            {
                  fecl=6;
            
            }

           else if(es3<md3&&es3<hr3)
            {

                if(md3>hr3)
                {
                    fecl=6;
                   
                }

                else
                {
                    fecl=7;
                  

                }

            }
            else if(hr3>es3&&h3>md3)
            {
              fecl=7;
            }

            else if(md3>es3&&md3>hr3)
            {
              fecl=6;
            }

            else if(hr3>es3&&md3>es3)
            {
              if(md3>hr3)
              {
              fecl=6;
              }
              else if(hr3>md3)
              {
                fecl=7;
              }
              else if(hr3==md3)
              {
                fecl=7;
              }
            }

            else if(es3==md3&&es3>hr3&&md3>hr3)
            {
              fecl=5;
            }
            else if(es3==hr3&&es3>md3&&hr3>md3)
            {
              fecl=6;
            }
            else if(md3==hr3&&md3>ed3&&hr3>es3)
            {
              fecl=7;
            }
            else
            {
              fecl=6;
            }
            for(var i=0;i<n;i++)
            {
               if(k1[i]<avgt)
               {
                 es=es+1;
               }  
               else if(k1[i]==avgt)
               {
                 md=md+1;
               }  
               else
               {
                 hr=hr+1;
               }
            }
            if(avgt<=1)
            {
              tcl=5;
              fcount+=1;
            }
            else if(es>md&&es>hr)
            {
                 tcl=5;
                 fcount+=1;
            }
            else if(es>md&&hr>md)
            {
               if(es>hr)
               {
                 tcl=5;
                 fcount+=1;
               }
               else if(es==hr)
               {
                 tcl=6;
                 scount+=1;
               }

               else if(hr>es)
               {
                 tcl=7;
                 secount+=1;
               }
            }
            else if(es>hr&&md>hr)
            {
               if(es>md)
               {
                 tcl=5;
                 fcount+=1;
               }
               else if(es==md)
               {
                 tcl=5;
                 fcount+=1;
               }

               else if(md>es)
               {
                 tcl=6;
                 scount+=1;
               }
            }
            else if(es<md&&es>hr)
            {
                  tcl=6;
                  scount+=1;
            }
           else if(es<md&&es<hr)
            {
                if(md>hr)
                {
                    tcl=6;
                    scount+=1;
                }
                else
                {
                    tcl=7;
                    secount+=1;
                }
            }
            else if(md>hr)
            {
              tcl=6;
              scount+=1;
            }
            else if(es==md&&md==hr&&hr==es)
            {
              tcl=6;
              scount+=1;
            }
            else
            {
              tcl=7;
              secount+=1;
            }     
             for(var i=0;i<n;i++)
            {
               if(k3[i]<avgh)
               {
                 es2=es2+1;
               }  
               else if(k3[i]==avgh)
               {
                 md2=md2+1;
               }  
               else
               {
                 hr2=hr2+1;
               }

            }
            if(avgh<=1)
            {
              hcl=5;
              fcount+=1;
            }
            else if(es2>md2&&es2>hr2)
            {
                 hcl=5;
                 fcount+=1;
            }
            else if(es2>md2&&hr2>md2)
            {
               if(es2>hr2)
               {
                 hcl=5;
                 fcount+=1;
               }
               else if(es2==hr2)
               {
                 hcl=6;
                 scount+=1;
               }

               else if(hr2>es2)
               {
                 hcl=7;
                 secount+=1;
               }
            }
            else if(es2>hr2&&md2>hr2)
            {
               if(es2>md2)
               {
                 hcl=5;
                 fcount+=1;
               }
               else if(es2==md2)
               {
                 hcl=5;
                 fcount+=1;
               }

               else if(md2>es2)
               {
                 hcl=6;
                 scount+=1;
               }
            }
            else if(es2<md2&&es2>hr2)
            {
                  hcl=6;
                  scount+=1;
            }
           else if(es2<md2&&es2<hr2)
            {

                if(md2>hr2)
                {
                    hcl=6;
                    scount+=1;
                }

                else
                {
                    hcl=7;
                    secount+=1;
                }

            }
            else if(md2>hr2)
            {
              hcl=6;
              scount+=1;
            }
            else if(es2==md2&&md2==hr2&&hr2==es2)
            {
              hcl=6;
              scount+=1;
            }
            else
            {
              hcl=7;
              secount+=1;
            }
            for(var i=0;i<n;i++)
            {
               if(k2[i]<avgc)
               {
                 es1=es1+1;
               }  
               else if(k2[i]==avgc)
               {
                 md1=md1+1;
               }  
               else
               {
                 hr1=hr1+1;
               }
            }
            if(avgc<=1)
            {
              ccl=5;
              fcount+=1;
            }
            else if(es1>md1&&es1>hr1)
            {
                 ccl=5;
                 fcount+=1;
            }
            else if(es1>md1&&hr1>md1)
            {
               if(es1>hr1)
               {
                 ccl=5;
                 fcount+=1;
               }
               else if(es1==hr1)
               {
                 ccl=6;
                 scount+=1;
               }

               else if(hr1>es1)
               {
                 ccl=7;
                 secount+=1;
               }
            }
            else if(es1>hr1&&md1>hr1)
            {
               if(es1>md1)
               {
                 ccl=5;
                 fcount+=1;
               }
               else if(es1==md1)
               {
                 ccl=5;
                 fcount+=1;
               }

               else if(md1>es1)
               {
                 ccl=6;
                 scount+=1;
               }
            }
            else if(es1<md1&&es1>hr1)
            {
                  ccl=6;
                  scount+=1;
            }
           else if(es1<md1&&es1<hr1)
            {
                if(md1>hr1)
                {
                    ccl=6;
                    scount+=1;
                }
                else
                {
                    ccl=7;
                    secount+=1;
                }
            }
            else if(md1>hr1)
            {
              ccl=6;
              scount+=1;
            }
            else if(es1==md1&&md1==hr1&&hr1==es1)
            {
              ccl=6;
              scount+=1;
            }
            else
            {
              ccl=7;
              secount+=1;
            }       
           

            var sec1=0;

            if(fcount>scount&&fcount>secount)
             {
                sec1=5;
               
             }

            else if(fcount>scount&&secount>scount)
            {
                if(fcount>secount)
                {
                  sec1=5;
                }
                else if(secount>fcount)
                {
                  sec1=7;
                }

                else if(fcount==secount)
                {
                  sec1=6;
                }
            
              
            }
            

            else if(scount>fcount&&secount>fcount)
            {
              if(scount>secount)
              {
                sec1=6;
              }
              else if(secount>scount)
              {
                sec1=7;
              }

              else if(scount==secount)
              {
                sec1=7;
              }
            }
            
            else if(fcount>=scount&&fcount>secount&&scount>secount)
            {
                if(fcount>scount)
                {
                  sec1=5;
                }

             

                else if(fcount==scount)
                {
                  sec1=5;
                }


            }

            else if(scount>=secount)
            {
              if(scount>secount)
              {
                  sec1=6;
              }

            
              else{
                sec1==7;
              }
            }

            else if(secount>=scount)
            {
              if(secount>scount)
              {
                  sec1=7;
              }

              else if(secount==scount)
              {
                sec1=7;
              }
            }
             var klr=h;
             var fail,pass;
             var sec2=0;            
             if(e>f&&e>g)
              {
                 sec2=5;
              }

              else if(f>g&&f>e)
              {
                sec2=7;
              }

              else if(g>e&&g>f)
              {
                sec2=6;
              }

              else if(e>=f&&e>g&&f>g)
              {

                if(e>f)
                {
                 sec2=5;
                }

                else
                {
                  sec2=6;
                }

              }


              else if(e>=g&&e>f&&g>f)
              {

                if(e>g)
                {
                 sec2=5;
                }

                else
                {
                  sec2=6;
                }

              }

              else if(f>=g&&f>e&&g>e)
              {
                if(f>g)
                {
                 sec2=7;
                }

                else
                {
                  sec2=7;
                }
              }

              else if(f>=e&&f>g&&e>g)
              {
                if(f>e)
                {
                 sec2=7;
                }

                else
                {
                  sec2=6;
                }
              }

              else if(g>=e&&g>f&&e>f)
              {
                if(g>e)
                {
                 sec2=6;
                }

                else
                {
                  sec2=5;
                }
              }

              else if(g>=f&&g>e&&f>e)
              {
                if(g>f)
                {
                 sec2=6;
                }

                else
                {
                  sec2=7;
                }
              }


              else
              {
                sec2=6;
              }           
            var tnt=0;
            if(sec1==5&&sec2==6 || sec1==6&&sec2==5)
            {
               tnt=6;
            }
            else if(sec1==5&&sec2==5)
            {
              tnt=5;
            }
            else if(sec1==6&&sec2==6)
            {
              tnt=6;
            }
            else if(sec1==7&&sec2==7)
            {
              tnt=7;
            }
            else if(sec1==5&&sec2==7 || sec2==5&&sec1==7)
            {
              tnt=6;
            }
            else if(sec1==7&&sec2==6 || sec2==7&&sec1==6)
            {
              tnt=7;
            }
            if(tnt==5)
            {
              if(fecl==7)
              {
                document.getElementById("demo").innerHTML = "HARD";
                
              }
              else{
                document.getElementById("demo").innerHTML = "EASY";
              }
            }

            else if(tnt==6)
            {
              if(fecl==5)
              {
                document.getElementById("demo").innerHTML = "EASY";
              }
              else
              {
                document.getElementById("demo").innerHTML = "MEDIUM";
              }
            }
   
           else if(tnt==7)
           {
             if(fecl==6||fecl==5)
             {
              document.getElementById("demo").innerHTML = "MEDIUM";
             }
             else
             {
              document.getElementById("demo").innerHTML = "HARD";
             }
           }
      
            
          }
          
          if(a==4)
          {
            var x=0;
            var y=0;
            var z=0;
            var j1=new Array();
            var j2=new Array();
            var j3=new Array();
            for(var i=0;i<n;i++)
            {
               var ss=i+1;
               
                j1[i]=document.getElementById('id1'+ss).value;
                vd=j1[i];
                if(vd<=0)
                {
                  alert("time cant be less than or equal to 0");
                  j1[i]=prompt("Time taken by student");
                  j1[i]=parseInt(j1[i]);
                  while(j1[i]<=0)
                  {
                    alert("time cant be less than or equal to 0");
                    j1[i]=prompt("Time taken by student");
                    j1[i]=parseInt(j1[i]);
                  }
                }
                j2[i]=document.getElementById('id2'+ss).value;
                j3[i]=document.getElementById('f'+ss).value;
            }
  
            for(var i=0;i<n;i++)
            {
                 x=x+parseInt(j1[i]);
                 y=y+parseInt(j2[i]);
                 z=z+parseInt(j3[i]);
            }
          
           
            var avgt=x/n;
            var avgc=y/n;
            var es=0,md=0,hr=0;
            var es1=0,md1=0,hr1=0;
            var es3=0,md3=0,hr3=0;
            var tcl=0,hcl=0;
            var fcount=0,scount=0,secount=0,fecl=0;
          
      
            for(var i=0;i<n;i++)
            {
               if(j3[i]==1)
               {
                 es3=es3+1;
               }  

               else if(j3[i]==2)
               {
                 md3=md3+1;
               }  

               else
               {
                 hr3=hr3+1;
               }

            }
            if(es3>md3&&es3>hr3)
            {
                 fecl=5;
               
            }
            else if(es3>md3&&hr3>md3)
            {
               if(es3>hr3)
               {
                 fecl=5;
            
               }
               else if(es3==hr3)
               {
                 fecl=6;
              
               }

               else if(hr3>es3)
               {
                 fecl=7;
              
               }
            }
            else if(es3>hr3&&md3>hr3)
            {
               if(es3>md3)
               {
                 fecl=5;
            
               }
               else if(md3==es3)
               {
                 fecl=5;
              
               }

               else if(md3>es3)
               {
                 fecl=6;
              
               }
            }
            else if(es3<md3&&es3>hr3)
            {
                  fecl=6;
            
            }

           else if(es3<md3&&es3<hr3)
            {

                if(md3>hr3)
                {
                    fecl=6;
                   
                }

                else
                {
                    fecl=7;
                  

                }

            }
            else if(hr3>es3&&h3>md3)
            {
              fecl=7;
            }

            else if(md3>es3&&md3>hr3)
            {
              fecl=6;
            }

            else if(hr3>es3&&md3>es3)
            {
              if(md3>hr3)
              {
               fecl=6;
              }
              else if(hr3>md3)
              {
                fecl=7;
              }
              else if(hr3==md3)
              {
                fecl=7;
              }
            }

            else if(es3==md3&&es3>hr3&&md3>hr3)
            {
              fecl=5;
            }
            else if(es3==hr3&&es3>md3&&hr3>md3)
            {
              fecl=6;
            }
            else if(md3==hr3&&md3>ed3&&hr3>es3)
            {
              fecl=7;
            }
            else
            {
              fecl=6;
            }
            for(var i=0;i<n;i++)
            {
               if(j1[i]<avgt)
               {
                 es=es+1;
               }  

               else if(j1[i]==avgt)
               {
                 md=md+1;
               }  

               else
               {
                 hr=hr+1;
               }

            }  

            if(avgt<=1)
            {
              tcl=5;
              fcount+=1;
            }
           else if(es>md&&es>hr)
            {
                 tcl=5;
                 fcount+=1;
            }
            else if(es>md&&hr>md)
            {
               if(es>hr)
               {
                 tcl=5;
                 fcount+=1;
               }
               else if(es==hr)
               {
                 tcl=6;
                 scount+=1;
               }

               else if(hr>es)
               {
                 tcl=7;
                 secount+=1;
               }
            }
            else if(es>hr&&es>hr)
            {
               if(es>md)
               {
                 tcl=5;
                 fcount+=1;
               }
               else if(es==md)
               {
                 tcl=5;
                 fcount+=1;
               }

               else if(md>es)
               {
                 tcl=6;
                 scount+=1;
               }
            }
            else if(es<md&&es>hr)
            {
                  tcl=6;
                  scount+=1;
            }

           else if(es<md&&es<hr)
            {

                if(md>hr)
                {
                    tcl=6;
                    scount+=1;
                }

                else
                {
                    tcl=7;
                    secount+=1;

                }
            }
            else if(md>hr)
            {
              tcl=6;
              scount+=1;
            }
            else if(es==md&&md==hr&&hr==es)
            {
              tcl=6;
              scount+=1;
            }
            else
            {
              tcl=7;
              secount+=1;
            }
         
            for(var i=0;i<n;i++)
            {
               if(j2[i]<avgc)
               {
                 es1=es1+1;
               }  

               else if(j2[i]==avgc)
               {
                 md1=md1+1;
               }  

               else
               {
                 hr1=hr1+1;
               }

            }
            if(avgc<=1)
            {
              hcl=5;
                 fcount+=1;
            }
            else if(es1>md1&&es1>hr1)
            {
                 hcl=5;
                 fcount+=1;
            }
            else if(es1>md1&&hr1>md1)
            {
               if(es1>hr1)
               {
                 hcl=5;
                 fcount+=1;
               }
               else if(es1==hr1)
               {
                 hcl=6;
                 scount+=1;
               }

               else if(hr1>es1)
               {
                 hcl=7;
                 secount+=1;
               }
            }
            else if(es1>hr1&&md1>hr1)
            {
               if(es1>md1)
               {
                 hcl=5;
                 fcount+=1;
               }
               else if(es1==md1)
               {
                 hcl=5;
                 fcount+=1;
               }

               else if(md1>es1)
               {
                 hcl=6;
                 scount+=1;
               }
            }
            else if(es1<md1&&es1>hr1)
            {
                  hcl=6;
                  scount+=1;
            }
           else if(es1<md1&&es1<hr1)
            {

                if(md1>hr1)
                {
                    hcl=6;
                    scount+=1;
                }

                else
                {
                    hcl=7;
                    secount+=1;
                }

            }
            else if(md1>hr1)
            {
              hcl=6;
              scount+=1;
            }
            else if(es1==md1&&md1==hr1&&hr1==es1)
            {
              hcl=6;
              scount+=1;
            }
            else
            {
              hcl=7;
              secount+=1;
            }  
            

            var sec1=0;

            if(fcount>scount&&fcount>secount)
             {
                sec1=5;
             
             }

            else if(fcount>scount&&secount>scount)
            {
                if(fcount>secount)
                {
                  sec1=5;
                }
                else if(secount>fcount)
                {
                  sec1=7;
                }

                else if(fcount==secount)
                {
                  sec1=6;
                }
            
              
            }
            

            else if(scount>fcount&&secount>fcount)
            {
              if(scount>secount)
              {
                sec1=6;
              }
              else if(secount>scount)
              {
                sec1=7;
              }

              else if(scount==secount)
              {
                sec1=7;
              }
            }
            
            else if(fcount>=scount&&fcount>secount&&scount>secount)
            {
                if(fcount>scount)
                {
                  sec1=5;
                }

             

                else if(fcount==scount)
                {
                  sec1=5;
                }


            }

            else if(scount>=secount)
            {
              if(scount>secount)
              {
                  sec1=6;
              }

            
              else{
                sec1==7;
              }
            }

            else if(secount>=scount)
            {
              if(secount>scount)
              {
                  sec1=7;
              }

              else if(secount==scount)
              {
                sec1=7;
              }
            }
             var klr=h;
             var fail,pass;
             var sec2=0;          
             if(e>f&&e>g)
              {
                 sec2=5;
              }

              else if(f>g&&f>e)
              {
                sec2=7;
              }

              else if(g>e&&g>f)
              {
                sec2=6;
              }

              else if(e>=f&&e>g&&f>g)
              {

                if(e>f)
                {
                 sec2=5;
                }

                else
                {
                  sec2=6;
                }

              }


              else if(e>=g&&e>f&&g>f)
              {

                if(e>g)
                {
                 sec2=5;
                }

                else
                {
                  sec2=6;
                }

              }

              else if(f>=g&&f>e&&g>e)
              {
                if(f>g)
                {
                 sec2=7;
                }

                else
                {
                  sec2=7;
                }
              }

              else if(f>=e&&f>g&&e>g)
              {
                if(f>e)
                {
                 sec2=7;
                }

                else
                {
                  sec2=6;
                }
              }

              else if(g>=e&&g>f&&e>f)
              {
                if(g>e)
                {
                 sec2=6;
                }

                else
                {
                  sec2=5;
                }
              }

              else if(g>=f&&g>e&&f>e)
              {
                if(g>f)
                {
                 sec2=6;
                }

                else
                {
                  sec2=7;
                }
              }


              else
              {
                sec2=6;
              }                    
            var tnt=0;
            if(sec1==5&&sec2==6 || sec1==6&&sec2==5)
            {
               tnt=6;
            }
            else if(sec1==5&&sec2==5)
            {
              tnt=5;
            }
            else if(sec1==6&&sec2==6)
            {
              tnt=6;
            }
            else if(sec1==7&&sec2==7)
            {
              tnt=7;
            }
            else if(sec1==5&&sec2==7 || sec2==5&&sec1==7)
            {
              tnt=6;
            } 
            else if(sec1==6&&sec2==7 || sec2==7&&sec1==6)
            {
              tnt=7;
            }

            else if(sec1==7&&sec2==6 || sec2==7&&sec1==6)
            {
              tnt=7;
            }
           
            if(tnt==5)
            {
              if(fecl==7)
              {
                document.getElementById("demo").innerHTML = "HARD";
                
              }
              else{
                document.getElementById("demo").innerHTML = "EASY";
              }
            }

            else if(tnt==6)
            {
              if(fecl==5)
              {
                document.getElementById("demo").innerHTML = "EASY";
              }
              else
              {
                document.getElementById("demo").innerHTML = "MEDIUM";
              }
            }
   
           else if(tnt==7)
           {
             if(fecl==6||fecl==5)
             {
              document.getElementById("demo").innerHTML = "MEDIUM";
             }
             else
             {
              document.getElementById("demo").innerHTML = "HARD";
             }
           }
          }
        
    }            
      function perform()    
    {
      var pf;
       a=document.getElementById("a1").value;
       n=document.getElementById('n').value; 
       if(n<=0)
       {
         alert("The total number of students cant be 0 or less than that");
         pf=prompt("Total number of students ");
         pf=parseInt(pf);
         while(pf<=0)
         {
            alert("The total number of students cant be 0 or less than that");
            pf=prompt("Total number of students ");
            pf=parseInt(pf);
         }
         n=pf;
         n=parseInt(n);
       }        
        var z=document.getElementById('ta1');
       if(a==1)
       {
        for(var i=0;i<=n;i++)
        {
            var xy=z.insertRow(i);
            for(var j=0;j<5;j++)//3 is no of column
            {
                if(i==0)
                {
                  if(j==0)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="sno"; 
                  }
                  else if(j==1)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="Timetaken(secs)"; 
                  }            
                  else if(j==2)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="Number of hints used"; 
                  }
                  else if(j==3)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="Number of times ans changed"; 
                  }          
                  else if(j==4)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="Feedback";
                  }
                }
                else if(j==0 && i!=0)
                {
                    var y=xy.insertCell(j);
                    y.innerHTML=i;
                }
                else if(i!=0 && j==4){
                    var y=xy.insertCell(j);
                    y.innerHTML='<select id="f'+i+'" autofocus required><option value="1" autofocus>EASY</option><option value="2" autofocus>MEDIUM</option><option value="3" autofocus>HARD</option></select>';
                }
                else{
                  var y=xy.insertCell(j);
                    y.innerHTML="<input type='number' id='id"+j+i+"'>";
                }
            }

        }
       }
       if(a==2)
       {         
        for(var i=0;i<=n;i++)
        {
            var xy=z.insertRow(i);
            for(var j=0;j<4;j++)//3 is no of column
            {
                if(i==0)
                {
                  if(j==0)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="sno"; 
                  }
                  else if(j==1)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="Timetaken(secs)"; 
                  }
                  else if(j==2)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="Number of hints used"; 
                  }            
                  else if(j==3)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="FeedBack"; 
                  }        
                }
                else if(j==0 && i!=0)
                {
                    var y=xy.insertCell(j);
                    y.innerHTML=i;
                }
                else if(j==3 && i!=0)
                {
                  
                    var y=xy.insertCell(j);
                    y.innerHTML='<select id="f'+i+'" autofocus required><option value="1" autofocus>EASY</option><option value="2" autofocus>MEDIUM</option><option value="3" autofocus>HARD</option></select>';
                
                }
                else{
                    var y=xy.insertCell(j);
                    y.innerHTML="<input type='number' id='id"+j+i+"'>";
                }
            }
        }
       }    
       if(a==3)
       {
        for(var i=0;i<=n;i++)
        {
            var xy=z.insertRow(i);
            for(var j=0;j<6;j++)//3 is no of column
            {
                if(i==0)
                {
                  if(j==0)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="sno"; 
                  }
                  else if(j==1)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="Timetaken(secs)"; 
                  }
                    
                  else if(j==2)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="count of program compiled"; 
                  }

                  else if(j==3)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="Number of hints used"; 
                  }

                  else if(j==4)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="Language used"; 
                  }
                    else if(j==5)
                    {
                      var y=xy.insertCell(j);
                    y.innerHTML="FeedBack"; 
                    }
                }
                else if(j==4&&i!=0)
                {
                    var y=xy.insertCell(j);
                    y.innerHTML='<select id="f1'+i+'" autofocus required><option value="1" autofocus>c</option><option value="2" autofocus>c++</option><option value="3" autofocus>java</option><option value="4" autofocus>python</option><option value="5" autofocus>javascript</option><option value="6" autofocus>c#</option></select>';
                }
                else if(j==5 && i!=0)
                {
                    var y=xy.insertCell(j);
                    y.innerHTML='<select id="f'+i+'" autofocus required><option value="1" autofocus>EASY</option><option value="2" autofocus>MEDIUM</option><option value="3" autofocus>HARD</option></select>';
                }
                else if(j==0 && i!=0)
                {
                    var y=xy.insertCell(j);
                    y.innerHTML=i;
                }
                else{
                    var y=xy.insertCell(j);
                    y.innerHTML="<input type='number' id='id"+j+i+"'>";
                }
            }
        }     
       }  
       if(a==4)
       {
        for(var i=0;i<=n;i++)
        {
            var xy=z.insertRow(i);
            for(var j=0;j<4;j++)//3 is no of column
            {
                if(i==0)
                {
                  if(j==0)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="sno"; 
                  }
                  else if(j==1)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="Timetaken(secs)"; 
                  }
                  else if(j==2)
                  {
                    var y=xy.insertCell(j);
                    y.innerHTML="Number of hints used"; 
                  }   
                  else if(j==3)
                  {
                      var y=xy.insertCell(j);
                      y.innerHTML="FeedBack";
                  }
                }
                else if(j==3 && i!=0)
                {
                    var y=xy.insertCell(j);
                    y.innerHTML='<select id="f'+i+'" autofocus required><option value="1" autofocus>EASY</option><option value="2" autofocus>MEDIUM</option><option value="3" autofocus>HARD</option></select>';
                }
                else if(j==0 && i!=0)
                {
                    var y=xy.insertCell(j);
                    y.innerHTML=i;
                }
                else{
                    var y=xy.insertCell(j);
                    y.innerHTML="<input type='number' id='id"+j+i+"'>";
                }
            }
        }
       }    
      
    }