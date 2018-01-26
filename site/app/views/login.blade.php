<!DOCTYPE html>

<html lang="en">
    
    <head>
        <meta charset="utf-8" />
        <title>Project Management Tool</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        
        <!-- BEGIN GLOBAL MANDATORY STYLES -->
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />

        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet">
        
        {{HTML::style('assets/global/plugins/font-awesome/css/font-awesome.min.css')}}
       
        {{HTML::style('assets/global/plugins/bootstrap/css/bootstrap.min.css')}}

        {{HTML::style('assets/global/css/components.min.css')}}
        {{HTML::style('assets/global/css/plugins.min.css')}}
        
        {{HTML::style('assets/admin/css/login.min.css')}}
        
        {{HTML::style('assets/admin/css/custom.css?v=2.0.1')}}
        
        {{HTML::script('assets/global/plugins/jquery.min.js')}}

        <link rel="shortcut icon" href="favicon.ico" /> </head>
    <!-- END HEAD -->

    <body class="login">
        <div class="top-logo">
            <div style="padding: 10px;">
                <img src="assets/img/EY-logo-li.png" style="width: 100px; height: auto">
            </div>
        </div>
        <!-- BEGIN LOGIN -->
        <div class="container">
            <div class="row" style="margin-top:-50px">
            <div class="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2">
                <div class="content">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="login-cont">
                                <div class="logo" style="margin-bottom: 10px;">
                                    <img src="{{url('assets/img/bmw.png')}}" style="width: 100px; height: auto">
                                </div>
                                <h4 style="font-size: 20px; text-align: center; margin-bottom: 20px; text-transform: uppercase;">Login to your account</h4>
                                @if(Session::has('success'))
                                    <div class="alert alert-success alert-dismissable">
                                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>
                                        {{Session::get('success')}}
                                    </div>
                                @endif
                                @if(Session::has('failure'))
                                    <div class="alert alert-danger">
                                        <button type="button" class="close" data-dismiss="alert">×</button>
                                        <i class="fa fa-ban-circle"></i><strong>Failure!</strong> {{Session::get('failure')}}
                                    </div>
                                @endif

                                <!-- BEGIN LOGIN FORM -->
                                {{Form::open(["url"=>"/login","method"=>"post","class"=>"login-form","autocomplete"=>"off"])}}
                                    <div class="alert alert-danger display-hide">
                                        <button class="close" data-close="alert"></button>
                                        <span> Enter any username and password. </span>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label visible-ie8 visible-ie9">Username</label>
                                        {{Form::text('username','',["class"=>"form-control form-control-solid placeholder-no-fix" , "placeholder" => "Username" , "autocomplete" => false])}}
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label visible-ie8 visible-ie9">Password</label>
                                        {{Form::password('password',["class"=>"form-control form-control-solid placeholder-no-fix" , "placeholder" => "Password" , "autocomplete" => false])}}
                                    </div>

                                    
                                    <div class="form-actions" style="padding-top: 0">
                                        <button type="submit" class="btn block green uppercase" style="width: 100%">Login <i class="fa fa-arrow-circle-o-right" ></i></button>
                                        
                                    </div>
                                    <div style="text-align: center;">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                    

                                    
                                {{Form::close()}}
                                <!-- END LOGIN FORM -->
                                <!-- BEGIN FORGOT PASSWORD FORM -->
                                {{Form::open(["url"=>"/reset-password","method"=>"post","class"=>"forget-form"])}}
                                    <h3 class="font-green">Forget Password ?</h3>
                                    <p> Enter your e-mail address below to reset your password. </p>
                                    <div class="form-group">
                                        {{Form::text('username','',["class"=>"form-control placeholder-no-fix" , "placeholder" => "Email","autocomplete"=>"off"])}}
                                    </div>
                                    <div class="form-actions">
                                        <button type="button" id="back-btn" class="btn green btn-outline">Back</button>
                                        <button type="submit" class="btn btn-success uppercase pull-right">Submit</button>
                                    </div>
                                {{Form::close()}}
                                <!-- END FORGOT PASSWORD FORM -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    
        
        {{HTML::script('assets/global/plugins/bootstrap/js/bootstrap.min.js')}}
        
        <!-- END CORE PLUGINS -->
        <!-- BEGIN PAGE LEVEL PLUGINS -->
        {{HTML::script('assets/global/plugins/jquery-validation/js/jquery.validate.min.js')}}
        {{HTML::script('assets/global/plugins/jquery-validation/js/additional-methods.min.js')}}
        <!-- END PAGE LEVEL PLUGINS -->
        <!-- BEGIN THEME GLOBAL SCRIPTS -->
        {{HTML::script('assets/global/scripts/app.min.js')}}
        <!-- END THEME GLOBAL SCRIPTS -->
        <!-- BEGIN PAGE LEVEL SCRIPTS -->
        
        {{HTML::script('assets/admin/scripts/login.min.js')}}
        <!-- END PAGE LEVEL SCRIPTS -->
        <!-- BEGIN THEME LAYOUT SCRIPTS -->
        <!-- END THEME LAYOUT SCRIPTS -->
    </body>

</html>