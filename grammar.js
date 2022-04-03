module.exports = grammar({
  name: 'context',

  extras: $ => [
    $.comment,
    /\s/
  ],

  rules: {
    // TODO: add the actual grammar rules

    comment: $ => token(seq('%', /.*/)),
  }
  
})
