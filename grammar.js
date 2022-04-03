module.exports = grammar({
  name: 'context',

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => 'hello',

    program: $ => repeat(choice(
      $.comment
    )),

    comment: $ => token(seq('%', /.*/)),
  }
});
