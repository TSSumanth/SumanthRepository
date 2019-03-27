var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var handlebars = require('handlebars');
var filesystem = require('fs');

var readHTMLFile = async function(path:any, callback:any) {
  filesystem.readFile(path, {encoding: 'utf-8'}, function (err:Error, html:any) {
      if (err) {
          throw err;
          callback(err);
      }
      else {
          callback(null, html);
      }
  });
};

async function sendEmail()
{
     var transporter = nodemailer.createTransport(smtpTransport({
        service:"oracle",
        host: 'stbeehive.oracle.com',
        port: 465,
        secure:true,
        auth: {
          user: 'sai.sumanth.reddy.talamanchi@oracle.com',
          pass: "Tssr.1993"
        },
        tls:{
            rejectUnauthorized:false
        }
      }));
      // verify connection configuration
      transporter.verify(function(error:any, success:any) {
          if (error) {
              console.log("error: Server is not connected");
              console.log(error);
          } else {
              console.log('Server is ready to take our messages');
          }
      });
      var results = [ { 
        asin: 'B01571L1Z4',
        url: 'domain.com',
        favourite: false,
        createdAt: '2016-11-18T19:08:41.662Z',
        updatedAt: '2016-11-18T19:08:41.662Z',
        id: '582f51b94581a7f21a884f40' 
      },
      { 
        asin: 'B01IM0K0R2',
        url: 'domain2.com',
        favourite: false,
        createdAt: '2016-11-16T17:56:21.696Z',
        updatedAt: '2016-11-16T17:56:21.696Z',
        id: 'B01IM0K0R2' 
       }];
       var content = results.reduce(function(a, b) {
        return a + '<tr><td>' + b.asin + '</a></td><td>' + b.url + '</td><td>' + b.favourite + '</td><td>' + b.createdAt + '</td></tr>';
      }, '');

      console.log(content);

        var mailOptions = {
          from: 'sai.sumanth.reddy.talamanchi@oracle.com',
          to: 'sai.sumanth.reddy.talamanchi@oracle.com',
          subject: 'Testing Node Mailer Configuration',
          text: "test",
          html: '<div><table><thead><tr><th>ASIN</th><th>Url</th><th>Favourite</th><th>createdAt</th></tr></thead><tbody>' + 
          content + '</tbody></table></div>' 
        };
        transporter.sendMail(mailOptions, function(error:any, info:any){
          if (error) {
            console.log("Error :");
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });   
    
}

sendEmail();