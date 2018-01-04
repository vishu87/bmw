<div ng-controller="cityCtrl" ng-init="initials()" class="ng-cloak">
	<h2 class="page-title">Cities</h2>
	<div class="row">
		<div class="col-md-5 form-group">
			<label>Select Country</label>
			<select ng-model="country_code" class="form-control">
				<option value="">Select Country</option>
				<option ng-repeat="country in countries" value="@{{country.country_code}}">@{{country.country_name}}</option>
			</select>
		</div>
		<div class="col-md-1 form-group">
			<button class="btn blue pull-right" ladda="processing" style="margin-top: 23px;" ng-click="getCities()">Go</button>
		</div>
	</div>

	<div ng-show="cities.length > 0">
		<div class="row">
			<div class="col-md-6 " style="padding: 10px;border: 1px dashed #CCC;font-size: 16px;margin: 10px 0;">
				<button class="btn green" ng-click="markAll(0)" ladda="processingMarkAll">Make all open</button>
			
				<button class="btn red pull-right" ng-click="markAll(1)" ladda="processingMarkAll">Make all close</button>
			</div>
			
		</div>
		
		<div class="row" ng-repeat="city in cities" >
			<div class="col-md-6" style="padding: 10px;border: 1px dashed #CCC;font-size: 16px;margin: 10px 0;">@{{city.city_name}}
				<button class="btn @{{city.show == 0?'red':'green'}} pull-right" ng-click="toggleShowValue(city)" ladda="city.processing">@{{city.show == 0?'Close':'Open'}}</button>
			</div>
		</div>
	</div>
</div>
