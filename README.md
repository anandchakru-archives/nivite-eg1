# NiviteEg1

How I created this Sample. More designes @ https://colorlib.com/wp/wedding-website-templates/

## Create a new Project

```sh
cd ~
ng new nivite-eg1 --style scss --prefix neg
cd nivite-eg1
```

## Create a new repo in github

Login to github.com (as anandchakru) & create a repo (nivite-eg1)

## Add remote repo and push your code to github.com
```sh
git remote add origin https://github.com/anandchakru/nivite-eg1.git
git push -u origin master
# include the gh-page creator
npm install -g angular-cli-ghpages
```
## Design & Build your invitation. Using API from nivite.jrvite.com

- Got bootstrap (excluded jquery & popper intentionally)

### Bootstrap
```sh
npm install --save bootstrap angular-epic-spinners
```

### Spinner
- Got a spinner for loading animation
  - https://github.com/hackafro/angular-epic-spinners
  - https://github.com/epicmaxco/epic-spinners

### Background
- Got a background designed
  - http://bgpatterns.com
  - http://stripegenerator.com
  - http://stripemania.com
  - http://patternify.com

### Carousal
- Got it from https://getbootstrap.com/docs/4.3/components/carousel/

### API
You'll need these 2 API at minimum to get started. Event details, RSVP.
#### Event details
To fetch the details of the event you created in nivite.jrvite.com. Typically you will call this before rendering your webpage. Example:

Request Type: GET

Request URL: http://nivite.jrvite.com/repo/invite/search/byInviteIdAndInvitePreviewKey?inviteId=347982&invitePreviewKey=1805305e6f47b&projection=invitePreview

Response Sample: 
```json
{
  "type" : "Birthday",
  "hostName" : "Bar Foo",
  "addrName" : "9415 Olympia Fields Dr",
  "addrText" : "9415 Olympia Fields Dr, San Ramon, CA 94583, USA",
  "invitePreviewKey" : "1805305e6f47b",
  "longMsg" : "We welcome all our esteemed guests, family members and friends to the birthday party celebrations of my dearest daughter. We would like to thank all of you for taking out time off your busy schedule to mark your presence for her. We hope you are going to enjoy at the party celebrations.",
  "shortMsg" : "You're invited",
  "showGuests" : true,
  "timeFrom" : 1562397764214,
  "timeTo" : 1562472000000,
  "title" : "Happy Birthday Foo",
  "tz" : "America/Los_Angeles",
  "addrType" : null,
  "photos" : [ {
    "oid" : "18053fc739c64",
    "url" : "https://drive.google.com/uc?export=view&id=1wtR16j_IXLlnCFIdAO0LHtpwYyTtxN3P",
    "tags" : "",
    "title" : null,
    "description" : null
  }, {
    "oid" : "18053373d045e",
    "url" : "https://drive.google.com/uc?export=view&id=1aj6U-TFNccVQefKUeVH_KwyMW5LWLpQ4",
    "tags" : "",
    "title" : null,
    "description" : null
  }, {
    "oid" : "180534b66cf9",
    "url" : "https://drive.google.com/uc?export=view&id=1L-XgztrYXaPJyI-JmWqab_DwE29J7kxL",
    "tags" : "",
    "title" : null,
    "description" : null
  } ],
  "inviteId" : 347982,
  "_links" : {
    "self" : {
      "href" : "http://localhost:8080/repo/invite/7"
    },
    "inviteDB" : {
      "href" : "http://localhost:8080/repo/invite/7{?projection}",
      "templated" : true
    },
    "template" : {
      "href" : "http://localhost:8080/repo/invite/7/template"
    },
    "customerInvites" : {
      "href" : "http://localhost:8080/repo/invite/7/customerInvites"
    }
  }
}
```

**Faults:** You will get a HTTP 404, if *inviteId* or *invitePreviewKey* doesn't match with what you created on nivite.jrvite.com [to double check go to http://nivite.jrvite.com/p/myevents]

#### RSVP

Request Type: GET

Request URL: http://nivite.jrvite.com/repo/invite/search/byInviteIdAndInvitePreviewKey?inviteId=347982&invitePreviewKey=1805305e6f47b&projection=invitePreview

Request Body:

```json

```

Response Sample: 

```json

```


**Faults:** 
 - You will get a HTTP 404, if *inviteId* or *invitePreviewKey* doesn't match with what you created on nivite.jrvite.com [to double check go to http://nivite.jrvite.com/p/myevents]
 - You will get a HTTP 400, if the request body  doesn't match with what is expected.
 -  

## Package and deploy to github

```sh
ng build --prod --base-href "https://anandchakru.github.io/nivite-eg1/"
ngh
```

## Visit your invitation on github pages

Go to https://anandchakru.github.io/nivite-eg1/ to view/respond to your invitation