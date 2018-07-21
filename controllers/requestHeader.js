// parse the request header and grab the relevant info
exports.parseRequestHeader = (req, res) => {
  // solution from https://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node
  // basically you can get more than 1 IP address in req.headers['x-forwarded-for']
  // client, proxy1, proxy2, proxy3
  let ipAddress = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
  
  let language = req.headers["accept-language"].split(',')[0];
  
  // matches parenthetical substrings
  // e.g. "hello (123) too (foobar)" returns an array ["(123)", "(foobar)"]
  const regexParenPairs = /\((.+?)\)/g;
  let browserOS = regexParenPairs.exec(req.headers["user-agent"])[0];
  
  res.json({ ipAddress, language, browserOS });
};

