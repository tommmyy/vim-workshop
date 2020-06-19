// to json:
one	first example
two	second example
three	third example
four	fourth example

// macro \<shift>1
const groupFamilies = R.groupBy(
  R.compose(
    R.join("_"),
    R.reduce(
      (acc, next) => (isSeparator(next) ? R.reduced(acc) : [...acc, next]),
      []
    ),
    R.split("_"),
    R.prop("feature_name")
  )
);
// show vimrc
