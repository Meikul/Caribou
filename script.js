
$(document).ready(function () {
  gadget.ready().then(gadget.fetch);
  let $btnGroup = $('.btn-group');
  $btnGroup.find('#create').on('click', create);
  $btnGroup.find('#read').on('click', read);
  $btnGroup.find('#update').on('click', update);
  $btnGroup.find('#delete').on('click', remove);
});

$(gadget).on({
  'expanded': function (evt) {
      console.log('Gadget expanded.');
  },
  'collapsed': function (evt) {
      console.log('Gadget collapsed.');
  },
  'configuration': function (evt, config) {
      console.log('New config:', config);
      $('#main').css({ 'font-size': config.font_size });
  },
  'notification': function (evt, notification) {
      console.log('Notification received:', notification);
  }
});

var fn = {
  success,
  error
}

function success(operation, res){
  console.log('success')
  console.log(operation, res)
}

function error(operation, res){
  console.log('error')
  console.log(operation, res)
}

function create(){
  const name = $('#mimetype').val();
  const data = $('#data').val();
  const isPrivate = $('#private').prop('checked');
  console.log('creating');
  console.log(name, data, isPrivate);
  gadget.Metadata.create({
    mime_type: name,
    metadata: data,
    scope: (isPrivate) ? 'private' : 'public'
  },{
    success,
    error
  })
}

function read(){
  const name = $('#mimetype').val();
  gadget.Metadata.list({
    mime_type: name
  },{
    success,
    error
  });
}

function update(){

}

function remove(){

}