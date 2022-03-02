exports.getData =(req, res, next) => {
    res.status(200).json({ //200 means success
      professionalName: 'Harry Potter',
      base64Image: 'https://loremflickr.com/320/240',
      nameLink: {
        firstName: 'Harry',
        url: "https://www.byui.edu/"
      },
      primaryDescription: "The boy who lived.",
      workDescription1: "Head of Magical Law Enforcement",
      workDescription2: "Dark Lord Eliminator",
      linkTitleText: "Potter for President",
      linkedInLink: {
        text: 'View LinkedIn',
        link: 'https://uk.linkedin.com/in/harry-potter-9b3b89102?trk=people-guest_people_search-card'
      },
      githubLink: {
        text: 'View Github',
        link: 'https://uk.linkedin.com/in/harry-potter-9b3b89102?trk=people-guest_people_search-card'
      }
});
};

exports.postData = (req, res, next) => {
  //create post in db
  const professionalName = req.body.professionalName;
  const base64Image = req.body.base64Image;
  const firstName = req.body.nameLink.firstName;
  const url = req.body.nameLink.url;
  const primaryDescription = req.body.primaryDescpripton;
  const workDescription1 = req.body.workDescription1;
  const workDescription2 = req.body.workDescription2;
  const linkTitleText = req.body.linkTitleText;
  const linkedInText = req.body.linkedInLink.text;
  const linkedInLink = req.body.linkedInLink.link;
  const githubText = req.body.githubLink.text;
  const githubLink = req.body.githubLink.link;
  res.status(201).json({ //201 indicated a resource was created successfully
    message: "transferred data successfully!",
    data: {
      professionalName: professionalName,
      base64Image: base64Image,
      firstName: firstName,
      url: url,
      primaryDescpripton: primaryDescription,
      workDescription1: workDescription1,
      workDescription2: workDescription2,
      linkTitleText: linkTitleText,
      linkedInText: linkedInText,
      linkedInLink: linkedInLink,
      githubText: githubText,
      githubLink: githubLink
     }
  });
};