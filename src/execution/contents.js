const Contents = [{
  text:'Politics',
  href:`#${encodeURIComponent(JSON.stringify({section:'politics'}))}`,
  subhrefs: [{
    text:'The White House',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'thewhitehouse'}))}`,
  },{
    text:'Courts and Law',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'courtsandlaw'}))}`,
  },{
    text:'Polling',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'polling'}))}`,
  },{
    text:'Senate',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'senate'}))}`,
  },{
    text:'House of Representatives',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'houseofrepresentatives'}))}`,
  }],
},{
  text:'Sports',
  href:`#${encodeURIComponent(JSON.stringify({section:'sports'}))}`,
  subhrefs: [{
    text:'NFL',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'nfl'}))}`,
  },{
    text:'NBA',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'nba'}))}`,
  },{
    text:'MLB',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'mlb'}))}`,
  }],
},{
  text:'National',
  href:`#${encodeURIComponent(JSON.stringify({section:'national'}))}`,
  subhrefs:[{
    text:'Education',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'education'}))}`,
  },{
    text:'Investigations',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'investigations'}))}`,
  },{
    text:'Obituaries',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'obituaries'}))}`,
  },{
    text:'National Security',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'nationalsecurity'}))}`,
  },{
    text:'Health & Science',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'national/healthscience'}))}`,
  },{
    text:'True Crime',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'truecrime'}))}`,
  }]
},{
  text:'Tech',
  href:`#${encodeURIComponent(JSON.stringify({section:'tech'}))}`,
  subhrefs: [{
    text:'Innovation',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'innovation'}))}`,
  },{
    text:'Silicon Valley',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'siliconvalley'}))}`,
  }],
},{
  text:'Business',
  href:`#${encodeURIComponent(JSON.stringify({section:'business'}))}`,
  subhrefs: [{
    text:'On Leadership',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'onleadership'}))}`,
  },{
    text:'Personal Finance',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'personalfinance'}))}`,
  },{
    text:'Energy and Environment',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'energyandenvironment'}))}`,
  },{
    text:'Markets',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'markets'}))}`,
  },{
    text:'World Business',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'worldbusiness'}))}`,
  },{
    text:'Capital Markets',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'capitalmarkets'}))}`,
  }],
},{
  text:'Entertainment',
  href:`#${encodeURIComponent(JSON.stringify({section:'entertainment'}))}`,
  subhrefs: [{
    text:'Books',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'books'}))}`,
  },{
    text:'Comics',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'comics'}))}`,
  },{
    text:'Television',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'television'}))}`,
  },{
    text:'Movies',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'movies'}))}`,
  },{
    text:'Museum',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'museum'}))}`,
  },{
    text:'Music',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'music'}))}`,
  },{
    text:'Theater and Dance',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'theateranddance'}))}`,
  },{
    text:'Bars / Clubs',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'barsclubs'}))}`,
  }],
},{
  text:'Lifestyle',
  href:`#${encodeURIComponent(JSON.stringify({section:'lifestyle'}))}`,
  subhrefs: [{
    text:'Food',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'food'}))}`,
  },{
    text:'Travel',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'travel'}))}`,
  },{
    text:'Wellness',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'wellness'}))}`,
  },{
    text:'Fashion',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'fashion'}))}`,
  },{
    text:'Home and Garden',
    href:`#${encodeURIComponent(JSON.stringify({subSection:'homeandgarden'}))}`,
  }],
}]

export {Contents}
