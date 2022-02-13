function slugify(title) {
    const slugifyTitle = title.toLowerCase().split(" ").join("-");
    console.log(slugifyTitle);
}

slugify("Arrays for begginers")