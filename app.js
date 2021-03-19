const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const fs  = require('fs');
const nodemailer = require('nodemailer');
const myform = require('./routes/myform');
const skills = require('./routes/skills');
const journey = require('./routes/journey');
const mywork = require('./routes/mywork');
const { getMaxListeners } = require('process');


const sendMessage = async (name,email) =>{
  let testAccount = await nodemailer.createTestAccount();
  // let transporter = await nodemailer.createTransport(
  //   {
  //     host : "smtp.gmail.com",
  //     port : 587,
  //     secure : false,
  //     auth: {
  //       user: "acw.dnsp@gmail.com",
  //       pass : "ilovekanpur3000"
  //     }
  //   }
  // )

  let transporter = await nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    // Security Type: 'SSL',
    secure: true, // use SSL
    auth: {
        user: "marketing@ecellmnnit.com",
        pass: "Marketing@123"
    }
});
console.log(email);
  let info =  await transporter.sendMail({
    from: '"ECell MNNIT" <marketing@ecellmnnit.com>', 
    to: `${email}`,
    subject: ` Association Proposal || Renaissance'21 :Annual E-Summit || ${name} || MNNIT Allahabad`,
    text: `
    `,
    html:`<div dir="ltr"><table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="color:rgb(0,0,0);font-family:&quot;Open Sans&quot;,sans-serif;font-size:medium"><tbody><tr><td align="center" bgcolor="#c8e0f4" style="padding:15px 0px"><img src="https://3.bp.blogspot.com/-2w4ASZKQjS4/WI3_Kqeyr3I/AAAAAAAAF2w/TDuZM56T1SEfWdpSXEp22ykiIVJtFejogCLcB/s1600/email_new.png" alt="Renaissance title logo" width="350" height="100" style="outline:0px;display:block" class="CToWUd a6T" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 427px; top: 226px;"><div id=":7f" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Download attachment " data-tooltip-class="a1V" data-tooltip="Download"><div class="akn"><div class="aSK J-J5-Ji aYr"></div></div></div></div><p style="padding:0px;margin:0px">27 March 2021</p></td></tr><tr><td bgcolor="#ededed" style="padding:10px 30px 40px"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size:16px;border-collapse:collapse"><tbody><tr><td>Hello ${name} Sir,</td></tr><tr><td style="padding:20px 0px 30px">Sincere greetings from&nbsp;<b>Entrepreneurship Cell, NIT Allahabad!</b><br><br>We are proud to announce the<b>&nbsp;6th Edition of RENAISSANCE</b>, the Annual Entrepreneurship Summit of NIT Allahabad which is to be held on&nbsp;<b>27th March 2021</b>. We are overjoyed to invite&nbsp;${name}<b>&nbsp;</b>to collaborate with us to make the event bigger and better.<br><br>Renaissance, the Annual Entrepreneurial Extravaganza is a fiesta of numerous promising startups, and has witnessed some of the most eminent speaker line ups from all over the country.<br>Our previous editions have observed participation from IITs, NITs and colleges across India, with the footfall count soaring as high as 2000-3000 in the previous editions, Renaissance has undoubtedly become one of India's largest e-summits. It provides a premier platform for future entrepreneurs to come together and exhibit their business acumen through numerous events like E-Plan, Panel Discussion, E-Talks, BizQuiz and many more.<br><br>Our alumni have made their mark in India's red-hot technology startup space with startups like -&nbsp;<b>Unacademy</b>,&nbsp;<b>Loco</b>,&nbsp;<b>Drivezy</b>,&nbsp;<b>Br<wbr>illio</b>,<b>&nbsp;Kratikal</b>,&nbsp;<b>MyDreamStore</b>,<wbr>&nbsp;<b>Getwork</b>,<b>&nbsp;Cube26</b>. And yet more startups are brewing in the Institute and waiting to be incorporated. We, with your assistance wish to bridge the gap between ideas and a startup by nurturing a more profound startup culture for thousands of bright minds all over India.<br><br>Our college has hosted a myriad of renowned entrepreneurs, bureaucrats and esteemed corporate professionals including Hon'ble President of India Ram Nath Kovind, Former President Pranab Mukherjee, Chetan Bhagat, Shailesh Vikram Singh and so on. Renaissance in the past has been a host to well acclaimed personalities like&nbsp;<b>Sandeep Jain</b>&nbsp;(Founder and CEO, Geeks for Geeks),&nbsp;<b>Vivek Prakash</b>&nbsp;(co-founder, HackerEarth),&nbsp;<b>Amit Ranjan</b>&nbsp;(co-founder, Slideshare),&nbsp;<b>Bhavesh Kothari</b>&nbsp;(CBO, Tapaswi Venture),&nbsp;<b>Ajit Balakrishnan</b>&nbsp;(CEO,&nbsp;<a href="http://rediff.com/" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://rediff.com/&amp;source=gmail&amp;ust=1616054356891000&amp;usg=AFQjCNHf0SeB7g1-f2nhhK0LjUSbmd1UMA">rediff.com</a>)<wbr>,&nbsp;<b>Sushil Kumar&nbsp;</b>(co-founder, Loco),&nbsp;<b>Murugavel Janakiraman&nbsp;</b>(Founder,<wbr>Matrimony.com).<br><br>The Sponsorship brochure is attached herewith for your kind perusal.<br><table style="border-spacing:39px;margin:auto"><tbody><tr><td align="center" bgcolor="#ededed" style="padding:10px 0px 0px"><a href="https://drive.google.com/file/d/1N0AMAiQeMZJzTTyXLvJl6V6eI_8mVt9N/view?usp=sharing" style="color:white;text-decoration-line:none;padding:10px 20px;background-color:rgb(75,158,96);border-radius:5px" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://drive.google.com/file/d/1N0AMAiQeMZJzTTyXLvJl6V6eI_8mVt9N/view?usp%3Dsharing&amp;source=gmail&amp;ust=1616054356891000&amp;usg=AFQjCNH58akEPiO1o1w7_AU3jbdMrCjgvQ">Event Brochure</a></td></tr><tr><td align="center" bgcolor="#ededed" style="padding:10px 0px 0px;outline:none"><a href="https://drive.google.com/file/d/1xsVcJXu8toXjsOLBFJdUQBxrlLeQ-cyO/view?usp=sharing" style="color:white;text-decoration-line:none;padding:10px 20px;background-color:rgb(75,158,96);border-radius:5px" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://drive.google.com/file/d/1xsVcJXu8toXjsOLBFJdUQBxrlLeQ-cyO/view?usp%3Dsharing&amp;source=gmail&amp;ust=1616054356891000&amp;usg=AFQjCNEOS9ascYKg1rPRDPEuHwr1HwduNg">Association Brochure</a></td></tr></tbody></table><p>We look forward to your response at the earliest possible and hope that we can count on your assistance to make this year's e-Summit one of our best yet!<br><br>Hoping for a positive reply.<br><br>Yours Sincerely<br>Alifiya Hussain<br>Convener, Renaissance 2021<br><a href="mailto:alifiya.20170048@mnnit.ac.in" rel="noreferrer" target="_blank">alifiya.20170048@mnnit.ac.in</a><br>Contact No.7597348262<br></p></td></tr></tbody></table></td></tr><tr><td bgcolor="#ededed"><div><p style="text-align:center">For official updates follow us on:</p><table align="center"><tbody><tr><td align="center"><a href="https://www.facebook.com/mnnitecell" title="our Facebook page" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/mnnitecell&amp;source=gmail&amp;ust=1616054356891000&amp;usg=AFQjCNG4802dhRudMiYWJV-8fBxdCxqqXA"><img src="https://4.bp.blogspot.com/-gDXKOlV0GNE/WI2UTLnZUkI/AAAAAAAABtA/r77ovtSRmkc_3o11_PF7YMj79GGcCBT6gCLcB/s1600/facebook.png" alt="" class="CToWUd"></a></td><td align="center"><a href="https://twitter.com/ECellMNNIT" title="our Twitter page" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/ECellMNNIT&amp;source=gmail&amp;ust=1616054356891000&amp;usg=AFQjCNG1kKarS4bL6y_VyrJpCFpKcsQsrQ"><img src="https://1.bp.blogspot.com/-7XA0OzO5ijw/WI2UTg0vi8I/AAAAAAAABtI/hYi2M9UgiaMOgCopO2XhkGMLs6sTyCE4wCLcB/s1600/twitter.png" alt="" class="CToWUd"></a></td><td align="center"><a href="https://www.linkedin.com/company/13249340" title="our Linkedin page" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/company/13249340&amp;source=gmail&amp;ust=1616054356891000&amp;usg=AFQjCNHmua0q3o2aRvnrglfDzC5JEzShBA"><img src="https://4.bp.blogspot.com/-jc9rSHdggDA/WI2UTNIYLvI/AAAAAAAABs8/_Qfpp_VdW4kf19rn-PekNRnmxYQPfbaWgCLcB/s1600/linkedin.png" alt="" class="CToWUd"></a></td><td align="center"><a href="https://www.instagram.com/ecellmnnit/" title="our Instagram page" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/ecellmnnit/&amp;source=gmail&amp;ust=1616054356891000&amp;usg=AFQjCNGt0XGKpdyOeIWO3bZTjGFlUWJtSQ"><img src="https://3.bp.blogspot.com/-NXTO-YSI2c0/WI2USzivNOI/AAAAAAAABtE/hH6QqZ73R90qXFLlBTfMI77O_N18Ard1wCLcB/s1600/instagram.png" alt="" class="CToWUd"></a></td></tr></tbody></table></div></td></tr><tr bgcolor="#ededed"><td align="center" style="padding:10px 0px">Please ignore if this email is not related to you!<br>NOTE: In case of any queries please contact our team immediately at&nbsp;<a href="mailto:renaissance@mnnit.ac.in" style="color:teal;text-decoration-line:none" rel="noreferrer" target="_blank">renaissance@mnnit.ac.in</a></td></tr><tr bgcolor="#c8e0f4"><td style="padding:20px 0px 10px 20px">Regards<br>Team&nbsp;<a href="http://renaissance.mnnit.ac.in/" style="color:teal;text-decoration-line:none" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://renaissance.mnnit.ac.in/&amp;source=gmail&amp;ust=1616054356892000&amp;usg=AFQjCNFVAbhq8SuNHZj1mW6w4ezADr2DBw">Renaissance 2021</a><br>MNNIT Allahabad, 211004, UP, India<br><a href="http://renaissance.mnnit.ac.in/" style="color:teal;text-decoration-line:none" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://renaissance.mnnit.ac.in/&amp;source=gmail&amp;ust=1616054356892000&amp;usg=AFQjCNFVAbhq8SuNHZj1mW6w4ezADr2DBw">https://ecellmnnit.com/renaissance/</a></td></tr></tbody></table></div>`,
  //   attachments:[
  //   {   // stream as an attachment
  //     filename: 'test.pdf',
  //     content: fs.createReadStream(__dirname + '/test.pdf')
  // }]
  })

console.log("msg sent", info.messageId)

}



//Port
const PORT = 6972;

//.env file
dotenv.config();


//Middlewaress
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static('client/build'));
app.use(express.json());
app.use('/api/form',myform);
app.use('/api/personalskill',skills);
app.use('/api/personaljourney',journey);
app.use('/api/personalwork',mywork);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
//   });
  
  //connect to DB
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database is connected!"));
  // mongoose.connect('http://localhost/personalportfolio')
  //    .then(() => console.log("Connected"))
  //    .catch((err) => console.log("Error in connecting to Mongo", err));
  const mail_array=["namanpatel453@gmail.com","anshikagangwar289@gmail.com","namanpatel453@hotmail.com","naman.20186028@mnnit.ac.in"]
  const name_array=["Naman","Anshika","Naman","Naman Patel"]
    app.get('/email',async(req,res) => {
      for(var i=0;i<mail_array.length;i++){
        await sendMessage(name_array[i],mail_array[i]);
        console.log(mail_array[i])
      }
      
      // console.log("runing")
      res.send("sent!!")
    })
  
 


  
  
  // let portfolio = new Portfolio({
  //   name : "Anshika Gangwar",
  //   skills : ["React Native","React","Python","Machine Learning","C/C++","Node"] ,
  //   journey : ["Shri Gulab Rai Montessori Sr. Sec. School, Bareilly", 
  //   "B.Tech Information Technology, Motilal Nehru National Institute of Technology Allahabad" ,
  //   "DESIS Ascend Fellowship" ,
  //   "Salesforce Intern'21 "] ,
  //   projects : [{
  //     title: "OneML",
  //     description: "Website - edu-social platformfor machine learning algorithms visualization Users can visualize the machine learning algorithms like linear regression and know how the various formulas work and their affecting factors"
  //   },
  // {
  //   title: "TextViaImage",
  //   description: "Cross platform app to extract text from static images and facility to share and save the text."
  // }]
  // })


 

 //const p = portfolio.save().then(()=> console.log("Saved"));

 

app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
}); 
 