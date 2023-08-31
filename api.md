# Actions

Types:

- <code><a href="./src/resources/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/actions.ts">ActionListResponse</a></code>

Methods:

- <code title="get /actions/{id}">client.actions.<a href="./src/resources/actions.ts">retrieve</a>(id) -> ActionRetrieveResponse</code>
- <code title="get /actions">client.actions.<a href="./src/resources/actions.ts">list</a>({ ...params }) -> ActionListResponse</code>

# Certificates

Types:

- <code><a href="./src/resources/certificates/certificates.ts">Certificate</a></code>
- <code><a href="./src/resources/certificates/certificates.ts">CertificateCreateResponse</a></code>
- <code><a href="./src/resources/certificates/certificates.ts">CertificateRetrieveResponse</a></code>
- <code><a href="./src/resources/certificates/certificates.ts">CertificateUpdateResponse</a></code>
- <code><a href="./src/resources/certificates/certificates.ts">CertificateListResponse</a></code>

Methods:

- <code title="post /certificates">client.certificates.<a href="./src/resources/certificates/certificates.ts">create</a>({ ...params }) -> CertificateCreateResponse</code>
- <code title="get /certificates/{id}">client.certificates.<a href="./src/resources/certificates/certificates.ts">retrieve</a>(id) -> CertificateRetrieveResponse</code>
- <code title="put /certificates/{id}">client.certificates.<a href="./src/resources/certificates/certificates.ts">update</a>(id, { ...params }) -> CertificateUpdateResponse</code>
- <code title="get /certificates">client.certificates.<a href="./src/resources/certificates/certificates.ts">list</a>({ ...params }) -> CertificateListResponse</code>
- <code title="delete /certificates/{id}">client.certificates.<a href="./src/resources/certificates/certificates.ts">del</a>(id) -> void</code>

## Actions

Types:

- <code><a href="./src/resources/certificates/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/certificates/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/certificates/actions.ts">ActionRetryResponse</a></code>

Methods:

- <code title="get /certificates/{id}/actions/{action_id}">client.certificates.actions.<a href="./src/resources/certificates/actions.ts">retrieve</a>(id, actionId) -> ActionRetrieveResponse</code>
- <code title="get /certificates/{id}/actions">client.certificates.actions.<a href="./src/resources/certificates/actions.ts">list</a>(id, { ...params }) -> ActionListResponse</code>
- <code title="post /certificates/{id}/actions/retry">client.certificates.actions.<a href="./src/resources/certificates/actions.ts">retry</a>(id) -> ActionRetryResponse</code>

# Datacenters

Types:

- <code><a href="./src/resources/datacenters.ts">DatacenterRetrieveResponse</a></code>
- <code><a href="./src/resources/datacenters.ts">DatacenterListResponse</a></code>

Methods:

- <code title="get /datacenters/{id}">client.datacenters.<a href="./src/resources/datacenters.ts">retrieve</a>(id) -> DatacenterRetrieveResponse</code>
- <code title="get /datacenters">client.datacenters.<a href="./src/resources/datacenters.ts">list</a>({ ...params }) -> DatacenterListResponse</code>

# Firewalls

Types:

- <code><a href="./src/resources/firewalls/firewalls.ts">Firewall</a></code>
- <code><a href="./src/resources/firewalls/firewalls.ts">Rule</a></code>
- <code><a href="./src/resources/firewalls/firewalls.ts">FirewallCreateResponse</a></code>
- <code><a href="./src/resources/firewalls/firewalls.ts">FirewallRetrieveResponse</a></code>
- <code><a href="./src/resources/firewalls/firewalls.ts">FirewallUpdateResponse</a></code>
- <code><a href="./src/resources/firewalls/firewalls.ts">FirewallListResponse</a></code>

Methods:

- <code title="post /firewalls">client.firewalls.<a href="./src/resources/firewalls/firewalls.ts">create</a>({ ...params }) -> FirewallCreateResponse</code>
- <code title="get /firewalls/{id}">client.firewalls.<a href="./src/resources/firewalls/firewalls.ts">retrieve</a>(id) -> FirewallRetrieveResponse</code>
- <code title="put /firewalls/{id}">client.firewalls.<a href="./src/resources/firewalls/firewalls.ts">update</a>(id, { ...params }) -> FirewallUpdateResponse</code>
- <code title="get /firewalls">client.firewalls.<a href="./src/resources/firewalls/firewalls.ts">list</a>({ ...params }) -> FirewallListResponse</code>
- <code title="delete /firewalls/{id}">client.firewalls.<a href="./src/resources/firewalls/firewalls.ts">del</a>(id) -> void</code>

## Actions

Types:

- <code><a href="./src/resources/firewalls/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/firewalls/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/firewalls/actions.ts">ActionApplyToResourcesResponse</a></code>
- <code><a href="./src/resources/firewalls/actions.ts">ActionRemoveFromResourcesResponse</a></code>
- <code><a href="./src/resources/firewalls/actions.ts">ActionSetRulesResponse</a></code>

Methods:

- <code title="get /firewalls/{id}/actions/{action_id}">client.firewalls.actions.<a href="./src/resources/firewalls/actions.ts">retrieve</a>(id, actionId) -> ActionRetrieveResponse</code>
- <code title="get /firewalls/{id}/actions">client.firewalls.actions.<a href="./src/resources/firewalls/actions.ts">list</a>(id, { ...params }) -> ActionListResponse</code>
- <code title="post /firewalls/{id}/actions/apply_to_resources">client.firewalls.actions.<a href="./src/resources/firewalls/actions.ts">applyToResources</a>(id, { ...params }) -> ActionApplyToResourcesResponse</code>
- <code title="post /firewalls/{id}/actions/remove_from_resources">client.firewalls.actions.<a href="./src/resources/firewalls/actions.ts">removeFromResources</a>(id, { ...params }) -> ActionRemoveFromResourcesResponse</code>
- <code title="post /firewalls/{id}/actions/set_rules">client.firewalls.actions.<a href="./src/resources/firewalls/actions.ts">setRules</a>(id, { ...params }) -> ActionSetRulesResponse</code>

# FloatingIps

Types:

- <code><a href="./src/resources/floating-ips/floating-ips.ts">FloatingIpCreateResponse</a></code>
- <code><a href="./src/resources/floating-ips/floating-ips.ts">FloatingIpRetrieveResponse</a></code>
- <code><a href="./src/resources/floating-ips/floating-ips.ts">FloatingIpUpdateResponse</a></code>
- <code><a href="./src/resources/floating-ips/floating-ips.ts">FloatingIpListResponse</a></code>

Methods:

- <code title="post /floating_ips">client.floatingIps.<a href="./src/resources/floating-ips/floating-ips.ts">create</a>({ ...params }) -> FloatingIpCreateResponse</code>
- <code title="get /floating_ips/{id}">client.floatingIps.<a href="./src/resources/floating-ips/floating-ips.ts">retrieve</a>(id) -> FloatingIpRetrieveResponse</code>
- <code title="put /floating_ips/{id}">client.floatingIps.<a href="./src/resources/floating-ips/floating-ips.ts">update</a>(id, { ...params }) -> FloatingIpUpdateResponse</code>
- <code title="get /floating_ips">client.floatingIps.<a href="./src/resources/floating-ips/floating-ips.ts">list</a>({ ...params }) -> FloatingIpListResponsesFloatingIpsPage</code>
- <code title="delete /floating_ips/{id}">client.floatingIps.<a href="./src/resources/floating-ips/floating-ips.ts">del</a>(id) -> void</code>

## Actions

Types:

- <code><a href="./src/resources/floating-ips/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/floating-ips/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/floating-ips/actions.ts">ActionAssignResponse</a></code>
- <code><a href="./src/resources/floating-ips/actions.ts">ActionChangeDnsPtrResponse</a></code>
- <code><a href="./src/resources/floating-ips/actions.ts">ActionChangeProtectionResponse</a></code>
- <code><a href="./src/resources/floating-ips/actions.ts">ActionUnassignResponse</a></code>

Methods:

- <code title="get /floating_ips/{id}/actions/{action_id}">client.floatingIps.actions.<a href="./src/resources/floating-ips/actions.ts">retrieve</a>(id, actionId) -> ActionRetrieveResponse</code>
- <code title="get /floating_ips/{id}/actions">client.floatingIps.actions.<a href="./src/resources/floating-ips/actions.ts">list</a>(id, { ...params }) -> ActionListResponse</code>
- <code title="post /floating_ips/{id}/actions/assign">client.floatingIps.actions.<a href="./src/resources/floating-ips/actions.ts">assign</a>(id, { ...params }) -> ActionAssignResponse</code>
- <code title="post /floating_ips/{id}/actions/change_dns_ptr">client.floatingIps.actions.<a href="./src/resources/floating-ips/actions.ts">changeDnsPtr</a>(id, { ...params }) -> ActionChangeDnsPtrResponse</code>
- <code title="post /floating_ips/{id}/actions/change_protection">client.floatingIps.actions.<a href="./src/resources/floating-ips/actions.ts">changeProtection</a>(id, { ...params }) -> ActionChangeProtectionResponse</code>
- <code title="post /floating_ips/{id}/actions/unassign">client.floatingIps.actions.<a href="./src/resources/floating-ips/actions.ts">unassign</a>(id) -> ActionUnassignResponse</code>

# Images

Types:

- <code><a href="./src/resources/images/images.ts">ImageRetrieveResponse</a></code>
- <code><a href="./src/resources/images/images.ts">ImageUpdateResponse</a></code>
- <code><a href="./src/resources/images/images.ts">ImageListResponse</a></code>

Methods:

- <code title="get /images/{id}">client.images.<a href="./src/resources/images/images.ts">retrieve</a>(id) -> ImageRetrieveResponse</code>
- <code title="put /images/{id}">client.images.<a href="./src/resources/images/images.ts">update</a>(id, { ...params }) -> ImageUpdateResponse</code>
- <code title="get /images">client.images.<a href="./src/resources/images/images.ts">list</a>({ ...params }) -> ImageListResponse</code>
- <code title="delete /images/{id}">client.images.<a href="./src/resources/images/images.ts">del</a>(id) -> void</code>

## Actions

Types:

- <code><a href="./src/resources/images/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/images/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/images/actions.ts">ActionChangeProtectionResponse</a></code>

Methods:

- <code title="get /images/{id}/actions/{action_id}">client.images.actions.<a href="./src/resources/images/actions.ts">retrieve</a>(id, actionId) -> ActionRetrieveResponse</code>
- <code title="get /images/{id}/actions">client.images.actions.<a href="./src/resources/images/actions.ts">list</a>(id, { ...params }) -> ActionListResponse</code>
- <code title="post /images/{id}/actions/change_protection">client.images.actions.<a href="./src/resources/images/actions.ts">changeProtection</a>(id, { ...params }) -> ActionChangeProtectionResponse</code>

# Isos

Types:

- <code><a href="./src/resources/isos.ts">IsoRetrieveResponse</a></code>
- <code><a href="./src/resources/isos.ts">IsoListResponse</a></code>

Methods:

- <code title="get /isos/{id}">client.isos.<a href="./src/resources/isos.ts">retrieve</a>(id) -> IsoRetrieveResponse</code>
- <code title="get /isos">client.isos.<a href="./src/resources/isos.ts">list</a>({ ...params }) -> IsoListResponse</code>

# LoadBalancerTypes

Types:

- <code><a href="./src/resources/load-balancer-types.ts">LoadBalancerTypeRetrieveResponse</a></code>
- <code><a href="./src/resources/load-balancer-types.ts">LoadBalancerTypeListResponse</a></code>

Methods:

- <code title="get /load_balancer_types/{id}">client.loadBalancerTypes.<a href="./src/resources/load-balancer-types.ts">retrieve</a>(id) -> LoadBalancerTypeRetrieveResponse</code>
- <code title="get /load_balancer_types">client.loadBalancerTypes.<a href="./src/resources/load-balancer-types.ts">list</a>({ ...params }) -> LoadBalancerTypeListResponse</code>

# LoadBalancers

Types:

- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancer</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerTargetIp</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerCreateResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerRetrieveResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerUpdateResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerListResponse</a></code>

Methods:

- <code title="post /load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">create</a>({ ...params }) -> LoadBalancerCreateResponse</code>
- <code title="get /load_balancers/{id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">retrieve</a>(id) -> LoadBalancerRetrieveResponse</code>
- <code title="put /load_balancers/{id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">update</a>(id, { ...params }) -> LoadBalancerUpdateResponse</code>
- <code title="get /load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">list</a>({ ...params }) -> LoadBalancerListResponse</code>
- <code title="delete /load_balancers/{id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">del</a>(id) -> void</code>

## Actions

Types:

- <code><a href="./src/resources/load-balancers/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionAddServiceResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionAssTargetResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionAttachToNetworkResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionChangeAlgorithmResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionChangeDnsPtrResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionChangeProtectionResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionChangeTypeResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionDeleteServiceResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionDetachFromNetworkResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionDisablePublicInterfaceResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionEnablePublicInterfaceResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionRemoveTargetResponse</a></code>
- <code><a href="./src/resources/load-balancers/actions.ts">ActionUpdateServiceResponse</a></code>

Methods:

- <code title="get /load_balancers/{id}/actions/{action_id}">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">retrieve</a>(id, actionId) -> ActionRetrieveResponse</code>
- <code title="get /load_balancers/{id}/actions">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">list</a>(id, { ...params }) -> ActionListResponse</code>
- <code title="post /load_balancers/{id}/actions/add_service">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">addService</a>(id, { ...params }) -> ActionAddServiceResponse</code>
- <code title="post /load_balancers/{id}/actions/add_target">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">assTarget</a>(id, { ...params }) -> ActionAssTargetResponse</code>
- <code title="post /load_balancers/{id}/actions/attach_to_network">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">attachToNetwork</a>(id, { ...params }) -> ActionAttachToNetworkResponse</code>
- <code title="post /load_balancers/{id}/actions/change_algorithm">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">changeAlgorithm</a>(id, { ...params }) -> ActionChangeAlgorithmResponse</code>
- <code title="post /load_balancers/{id}/actions/change_dns_ptr">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">changeDnsPtr</a>(id, { ...params }) -> ActionChangeDnsPtrResponse</code>
- <code title="post /load_balancers/{id}/actions/change_protection">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">changeProtection</a>(id, { ...params }) -> ActionChangeProtectionResponse</code>
- <code title="post /load_balancers/{id}/actions/change_type">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">changeType</a>(id, { ...params }) -> ActionChangeTypeResponse</code>
- <code title="post /load_balancers/{id}/actions/delete_service">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">deleteService</a>(id, { ...params }) -> ActionDeleteServiceResponse</code>
- <code title="post /load_balancers/{id}/actions/detach_from_network">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">detachFromNetwork</a>(id, { ...params }) -> ActionDetachFromNetworkResponse</code>
- <code title="post /load_balancers/{id}/actions/disable_public_interface">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">disablePublicInterface</a>(id) -> ActionDisablePublicInterfaceResponse</code>
- <code title="post /load_balancers/{id}/actions/enable_public_interface">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">enablePublicInterface</a>(id) -> ActionEnablePublicInterfaceResponse</code>
- <code title="post /load_balancers/{id}/actions/remove_target">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">removeTarget</a>(id, { ...params }) -> ActionRemoveTargetResponse</code>
- <code title="post /load_balancers/{id}/actions/update_service">client.loadBalancers.actions.<a href="./src/resources/load-balancers/actions.ts">updateService</a>(id, { ...params }) -> ActionUpdateServiceResponse</code>

## Metrics

Types:

- <code><a href="./src/resources/load-balancers/metrics.ts">MetricListResponse</a></code>

Methods:

- <code title="get /load_balancers/{id}/metrics">client.loadBalancers.metrics.<a href="./src/resources/load-balancers/metrics.ts">list</a>(id, { ...params }) -> MetricListResponse</code>

# Locations

Types:

- <code><a href="./src/resources/locations.ts">LocationRetrieveResponse</a></code>
- <code><a href="./src/resources/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /locations/{id}">client.locations.<a href="./src/resources/locations.ts">retrieve</a>(id) -> LocationRetrieveResponse</code>
- <code title="get /locations">client.locations.<a href="./src/resources/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

# Networks

Types:

- <code><a href="./src/resources/networks/networks.ts">NetworkCreateResponse</a></code>
- <code><a href="./src/resources/networks/networks.ts">NetworkRetrieveResponse</a></code>
- <code><a href="./src/resources/networks/networks.ts">NetworkUpdateResponse</a></code>
- <code><a href="./src/resources/networks/networks.ts">NetworkListResponse</a></code>

Methods:

- <code title="post /networks">client.networks.<a href="./src/resources/networks/networks.ts">create</a>({ ...params }) -> NetworkCreateResponse</code>
- <code title="get /networks/{id}">client.networks.<a href="./src/resources/networks/networks.ts">retrieve</a>(id) -> NetworkRetrieveResponse</code>
- <code title="put /networks/{id}">client.networks.<a href="./src/resources/networks/networks.ts">update</a>(id, { ...params }) -> NetworkUpdateResponse</code>
- <code title="get /networks">client.networks.<a href="./src/resources/networks/networks.ts">list</a>({ ...params }) -> NetworkListResponse</code>
- <code title="delete /networks/{id}">client.networks.<a href="./src/resources/networks/networks.ts">del</a>(id) -> void</code>

## Actions

Types:

- <code><a href="./src/resources/networks/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/networks/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/networks/actions.ts">ActionAddRouteResponse</a></code>
- <code><a href="./src/resources/networks/actions.ts">ActionAddSubnetResponse</a></code>
- <code><a href="./src/resources/networks/actions.ts">ActionChangeIpRangeResponse</a></code>
- <code><a href="./src/resources/networks/actions.ts">ActionChangeProtectionResponse</a></code>
- <code><a href="./src/resources/networks/actions.ts">ActionDeleteRouteResponse</a></code>
- <code><a href="./src/resources/networks/actions.ts">ActionDeleteSubnetResponse</a></code>

Methods:

- <code title="get /networks/{id}/actions/{action_id}">client.networks.actions.<a href="./src/resources/networks/actions.ts">retrieve</a>(id, actionId) -> ActionRetrieveResponse</code>
- <code title="get /networks/{id}/actions">client.networks.actions.<a href="./src/resources/networks/actions.ts">list</a>(id, { ...params }) -> ActionListResponse</code>
- <code title="post /networks/{id}/actions/add_route">client.networks.actions.<a href="./src/resources/networks/actions.ts">addRoute</a>(id, { ...params }) -> ActionAddRouteResponse</code>
- <code title="post /networks/{id}/actions/add_subnet">client.networks.actions.<a href="./src/resources/networks/actions.ts">addSubnet</a>(id, { ...params }) -> ActionAddSubnetResponse</code>
- <code title="post /networks/{id}/actions/change_ip_range">client.networks.actions.<a href="./src/resources/networks/actions.ts">changeIpRange</a>(id, { ...params }) -> ActionChangeIpRangeResponse</code>
- <code title="post /networks/{id}/actions/change_protection">client.networks.actions.<a href="./src/resources/networks/actions.ts">changeProtection</a>(id, { ...params }) -> ActionChangeProtectionResponse</code>
- <code title="post /networks/{id}/actions/delete_route">client.networks.actions.<a href="./src/resources/networks/actions.ts">deleteRoute</a>(id, { ...params }) -> ActionDeleteRouteResponse</code>
- <code title="post /networks/{id}/actions/delete_subnet">client.networks.actions.<a href="./src/resources/networks/actions.ts">deleteSubnet</a>(id, { ...params }) -> ActionDeleteSubnetResponse</code>

# PlacementGroups

Types:

- <code><a href="./src/resources/placement-groups.ts">PlacementGroup</a></code>
- <code><a href="./src/resources/placement-groups.ts">PlacementGroupCreateResponse</a></code>
- <code><a href="./src/resources/placement-groups.ts">PlacementGroupRetrieveResponse</a></code>
- <code><a href="./src/resources/placement-groups.ts">PlacementGroupUpdateResponse</a></code>
- <code><a href="./src/resources/placement-groups.ts">PlacementGroupListResponse</a></code>

Methods:

- <code title="post /placement_groups">client.placementGroups.<a href="./src/resources/placement-groups.ts">create</a>({ ...params }) -> PlacementGroupCreateResponse</code>
- <code title="get /placement_groups/{id}">client.placementGroups.<a href="./src/resources/placement-groups.ts">retrieve</a>(id) -> PlacementGroupRetrieveResponse</code>
- <code title="put /placement_groups/{id}">client.placementGroups.<a href="./src/resources/placement-groups.ts">update</a>(id, { ...params }) -> PlacementGroupUpdateResponse</code>
- <code title="get /placement_groups">client.placementGroups.<a href="./src/resources/placement-groups.ts">list</a>({ ...params }) -> PlacementGroupListResponse</code>
- <code title="delete /placement_groups/{id}">client.placementGroups.<a href="./src/resources/placement-groups.ts">del</a>(id) -> void</code>

# Pricing

Types:

- <code><a href="./src/resources/pricing.ts">PricingRetrieveResponse</a></code>

Methods:

- <code title="get /pricing">client.pricing.<a href="./src/resources/pricing.ts">retrieve</a>() -> PricingRetrieveResponse</code>

# PrimaryIps

Types:

- <code><a href="./src/resources/primary-ips/primary-ips.ts">PrimaryIp</a></code>
- <code><a href="./src/resources/primary-ips/primary-ips.ts">PrimaryIpCreateResponse</a></code>
- <code><a href="./src/resources/primary-ips/primary-ips.ts">PrimaryIpRetrieveResponse</a></code>
- <code><a href="./src/resources/primary-ips/primary-ips.ts">PrimaryIpUpdateResponse</a></code>
- <code><a href="./src/resources/primary-ips/primary-ips.ts">PrimaryIpListResponse</a></code>

Methods:

- <code title="post /primary_ips">client.primaryIps.<a href="./src/resources/primary-ips/primary-ips.ts">create</a>({ ...params }) -> PrimaryIpCreateResponse</code>
- <code title="get /primary_ips/{id}">client.primaryIps.<a href="./src/resources/primary-ips/primary-ips.ts">retrieve</a>(id) -> PrimaryIpRetrieveResponse</code>
- <code title="put /primary_ips/{id}">client.primaryIps.<a href="./src/resources/primary-ips/primary-ips.ts">update</a>(id, { ...params }) -> PrimaryIpUpdateResponse</code>
- <code title="get /primary_ips">client.primaryIps.<a href="./src/resources/primary-ips/primary-ips.ts">list</a>({ ...params }) -> PrimaryIpListResponse</code>
- <code title="delete /primary_ips/{id}">client.primaryIps.<a href="./src/resources/primary-ips/primary-ips.ts">del</a>(id) -> void</code>

## Actions

Types:

- <code><a href="./src/resources/primary-ips/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/primary-ips/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/primary-ips/actions.ts">ActionAssignResponse</a></code>
- <code><a href="./src/resources/primary-ips/actions.ts">ActionChangeDnsPtrResponse</a></code>
- <code><a href="./src/resources/primary-ips/actions.ts">ActionChangeProtectionResponse</a></code>
- <code><a href="./src/resources/primary-ips/actions.ts">ActionUnassignResponse</a></code>

Methods:

- <code title="get /primary_ips/actions/{id}">client.primaryIps.actions.<a href="./src/resources/primary-ips/actions.ts">retrieve</a>(id) -> ActionRetrieveResponse</code>
- <code title="get /primary_ips/actions">client.primaryIps.actions.<a href="./src/resources/primary-ips/actions.ts">list</a>({ ...params }) -> ActionListResponse</code>
- <code title="post /primary_ips/{id}/actions/assign">client.primaryIps.actions.<a href="./src/resources/primary-ips/actions.ts">assign</a>(id, { ...params }) -> ActionAssignResponse</code>
- <code title="post /primary_ips/{id}/actions/change_dns_ptr">client.primaryIps.actions.<a href="./src/resources/primary-ips/actions.ts">changeDnsPtr</a>(id, { ...params }) -> ActionChangeDnsPtrResponse</code>
- <code title="post /primary_ips/{id}/actions/change_protection">client.primaryIps.actions.<a href="./src/resources/primary-ips/actions.ts">changeProtection</a>(id, { ...params }) -> ActionChangeProtectionResponse</code>
- <code title="post /primary_ips/{id}/actions/unassign">client.primaryIps.actions.<a href="./src/resources/primary-ips/actions.ts">unassign</a>(id) -> ActionUnassignResponse</code>

# ServerTypes

Types:

- <code><a href="./src/resources/server-types.ts">ServerTypeRetrieveResponse</a></code>
- <code><a href="./src/resources/server-types.ts">ServerTypeListResponse</a></code>

Methods:

- <code title="get /server_types/{id}">client.serverTypes.<a href="./src/resources/server-types.ts">retrieve</a>(id) -> ServerTypeRetrieveResponse</code>
- <code title="get /server_types">client.serverTypes.<a href="./src/resources/server-types.ts">list</a>({ ...params }) -> ServerTypeListResponse</code>

# Servers

Types:

- <code><a href="./src/resources/servers/servers.ts">Server</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerPublicNet</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerCreateResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerRetrieveResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerUpdateResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerDeleteResponse</a></code>

Methods:

- <code title="post /servers">client.servers.<a href="./src/resources/servers/servers.ts">create</a>({ ...params }) -> ServerCreateResponse</code>
- <code title="get /servers/{id}">client.servers.<a href="./src/resources/servers/servers.ts">retrieve</a>(id) -> ServerRetrieveResponse</code>
- <code title="put /servers/{id}">client.servers.<a href="./src/resources/servers/servers.ts">update</a>(id, { ...params }) -> ServerUpdateResponse</code>
- <code title="get /servers">client.servers.<a href="./src/resources/servers/servers.ts">list</a>({ ...params }) -> ServersServersPage</code>
- <code title="delete /servers/{id}">client.servers.<a href="./src/resources/servers/servers.ts">del</a>(id) -> ServerDeleteResponse</code>

## Actions

Types:

- <code><a href="./src/resources/servers/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionAddToPlacementGroupResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionAttachIsoResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionAttachToNetworkResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionChangeAliasIpsResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionChangeDnsPtrResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionChangeProtectionResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionChangeTypeResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionCreateImageResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionDetachFromNetworkResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionDetachIsoResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionDisableBackupResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionDisableRescueResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionEnableBackupResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionEnableRescueResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionPoweroffResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionPoweronResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionRebootResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionRebuildResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionRemoveFromPlacementGroupResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionRequestConsoleResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionResetResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionResetPasswordResponse</a></code>
- <code><a href="./src/resources/servers/actions.ts">ActionShutdownResponse</a></code>

Methods:

- <code title="get /servers/{id}/actions/{action_id}">client.servers.actions.<a href="./src/resources/servers/actions.ts">retrieve</a>(id, actionId) -> ActionRetrieveResponse</code>
- <code title="get /servers/{id}/actions">client.servers.actions.<a href="./src/resources/servers/actions.ts">list</a>(id, { ...params }) -> ActionListResponse</code>
- <code title="post /servers/{id}/actions/add_to_placement_group">client.servers.actions.<a href="./src/resources/servers/actions.ts">addToPlacementGroup</a>(id, { ...params }) -> ActionAddToPlacementGroupResponse</code>
- <code title="post /servers/{id}/actions/attach_iso">client.servers.actions.<a href="./src/resources/servers/actions.ts">attachIso</a>(id, { ...params }) -> ActionAttachIsoResponse</code>
- <code title="post /servers/{id}/actions/attach_to_network">client.servers.actions.<a href="./src/resources/servers/actions.ts">attachToNetwork</a>(id, { ...params }) -> ActionAttachToNetworkResponse</code>
- <code title="post /servers/{id}/actions/change_alias_ips">client.servers.actions.<a href="./src/resources/servers/actions.ts">changeAliasIps</a>(id, { ...params }) -> ActionChangeAliasIpsResponse</code>
- <code title="post /servers/{id}/actions/change_dns_ptr">client.servers.actions.<a href="./src/resources/servers/actions.ts">changeDnsPtr</a>(id, { ...params }) -> ActionChangeDnsPtrResponse</code>
- <code title="post /servers/{id}/actions/change_protection">client.servers.actions.<a href="./src/resources/servers/actions.ts">changeProtection</a>(id, { ...params }) -> ActionChangeProtectionResponse</code>
- <code title="post /servers/{id}/actions/change_type">client.servers.actions.<a href="./src/resources/servers/actions.ts">changeType</a>(id, { ...params }) -> ActionChangeTypeResponse</code>
- <code title="post /servers/{id}/actions/create_image">client.servers.actions.<a href="./src/resources/servers/actions.ts">createImage</a>(id, { ...params }) -> ActionCreateImageResponse</code>
- <code title="post /servers/{id}/actions/detach_from_network">client.servers.actions.<a href="./src/resources/servers/actions.ts">detachFromNetwork</a>(id, { ...params }) -> ActionDetachFromNetworkResponse</code>
- <code title="post /servers/{id}/actions/detach_iso">client.servers.actions.<a href="./src/resources/servers/actions.ts">detachIso</a>(id) -> ActionDetachIsoResponse</code>
- <code title="post /servers/{id}/actions/disable_backup">client.servers.actions.<a href="./src/resources/servers/actions.ts">disableBackup</a>(id) -> ActionDisableBackupResponse</code>
- <code title="post /servers/{id}/actions/disable_rescue">client.servers.actions.<a href="./src/resources/servers/actions.ts">disableRescue</a>(id) -> ActionDisableRescueResponse</code>
- <code title="post /servers/{id}/actions/enable_backup">client.servers.actions.<a href="./src/resources/servers/actions.ts">enableBackup</a>(id) -> ActionEnableBackupResponse</code>
- <code title="post /servers/{id}/actions/enable_rescue">client.servers.actions.<a href="./src/resources/servers/actions.ts">enableRescue</a>(id, { ...params }) -> ActionEnableRescueResponse</code>
- <code title="post /servers/{id}/actions/poweroff">client.servers.actions.<a href="./src/resources/servers/actions.ts">poweroff</a>(id) -> ActionPoweroffResponse</code>
- <code title="post /servers/{id}/actions/poweron">client.servers.actions.<a href="./src/resources/servers/actions.ts">poweron</a>(id) -> ActionPoweronResponse</code>
- <code title="post /servers/{id}/actions/reboot">client.servers.actions.<a href="./src/resources/servers/actions.ts">reboot</a>(id) -> ActionRebootResponse</code>
- <code title="post /servers/{id}/actions/rebuild">client.servers.actions.<a href="./src/resources/servers/actions.ts">rebuild</a>(id, { ...params }) -> ActionRebuildResponse</code>
- <code title="post /servers/{id}/actions/remove_from_placement_group">client.servers.actions.<a href="./src/resources/servers/actions.ts">removeFromPlacementGroup</a>(id) -> ActionRemoveFromPlacementGroupResponse</code>
- <code title="post /servers/{id}/actions/request_console">client.servers.actions.<a href="./src/resources/servers/actions.ts">requestConsole</a>(id) -> ActionRequestConsoleResponse</code>
- <code title="post /servers/{id}/actions/reset">client.servers.actions.<a href="./src/resources/servers/actions.ts">reset</a>(id) -> ActionResetResponse</code>
- <code title="post /servers/{id}/actions/reset_password">client.servers.actions.<a href="./src/resources/servers/actions.ts">resetPassword</a>(id) -> ActionResetPasswordResponse</code>
- <code title="post /servers/{id}/actions/shutdown">client.servers.actions.<a href="./src/resources/servers/actions.ts">shutdown</a>(id) -> ActionShutdownResponse</code>

## Metrics

Types:

- <code><a href="./src/resources/servers/metrics.ts">MetricListResponse</a></code>

Methods:

- <code title="get /servers/{id}/metrics">client.servers.metrics.<a href="./src/resources/servers/metrics.ts">list</a>(id, { ...params }) -> MetricListResponse</code>

# SshKeys

Types:

- <code><a href="./src/resources/ssh-keys.ts">SshKeyCreateResponse</a></code>
- <code><a href="./src/resources/ssh-keys.ts">SshKeyRetrieveResponse</a></code>
- <code><a href="./src/resources/ssh-keys.ts">SshKeyUpdateResponse</a></code>
- <code><a href="./src/resources/ssh-keys.ts">SshKeyListResponse</a></code>

Methods:

- <code title="post /ssh_keys">client.sshKeys.<a href="./src/resources/ssh-keys.ts">create</a>({ ...params }) -> SshKeyCreateResponse</code>
- <code title="get /ssh_keys/{id}">client.sshKeys.<a href="./src/resources/ssh-keys.ts">retrieve</a>(id) -> SshKeyRetrieveResponse</code>
- <code title="put /ssh_keys/{id}">client.sshKeys.<a href="./src/resources/ssh-keys.ts">update</a>(id, { ...params }) -> SshKeyUpdateResponse</code>
- <code title="get /ssh_keys">client.sshKeys.<a href="./src/resources/ssh-keys.ts">list</a>({ ...params }) -> SshKeyListResponse</code>
- <code title="delete /ssh_keys/{id}">client.sshKeys.<a href="./src/resources/ssh-keys.ts">del</a>(id) -> void</code>

# Volumes

Types:

- <code><a href="./src/resources/volumes/volumes.ts">VolumeCreateResponse</a></code>
- <code><a href="./src/resources/volumes/volumes.ts">VolumeRetrieveResponse</a></code>
- <code><a href="./src/resources/volumes/volumes.ts">VolumeUpdateResponse</a></code>
- <code><a href="./src/resources/volumes/volumes.ts">VolumeListResponse</a></code>

Methods:

- <code title="post /volumes">client.volumes.<a href="./src/resources/volumes/volumes.ts">create</a>({ ...params }) -> VolumeCreateResponse</code>
- <code title="get /volumes/{id}">client.volumes.<a href="./src/resources/volumes/volumes.ts">retrieve</a>(id) -> VolumeRetrieveResponse</code>
- <code title="put /volumes/{id}">client.volumes.<a href="./src/resources/volumes/volumes.ts">update</a>(id, { ...params }) -> VolumeUpdateResponse</code>
- <code title="get /volumes">client.volumes.<a href="./src/resources/volumes/volumes.ts">list</a>({ ...params }) -> VolumeListResponse</code>
- <code title="delete /volumes/{id}">client.volumes.<a href="./src/resources/volumes/volumes.ts">del</a>(id) -> void</code>

## Actions

Types:

- <code><a href="./src/resources/volumes/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/volumes/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/volumes/actions.ts">ActionAttachResponse</a></code>
- <code><a href="./src/resources/volumes/actions.ts">ActionChangeProtectionResponse</a></code>
- <code><a href="./src/resources/volumes/actions.ts">ActionDetachResponse</a></code>
- <code><a href="./src/resources/volumes/actions.ts">ActionResizeResponse</a></code>

Methods:

- <code title="get /volumes/actions/{id}">client.volumes.actions.<a href="./src/resources/volumes/actions.ts">retrieve</a>(id) -> ActionRetrieveResponse</code>
- <code title="get /volumes/{id}/actions">client.volumes.actions.<a href="./src/resources/volumes/actions.ts">list</a>(id, { ...params }) -> ActionListResponse</code>
- <code title="post /volumes/{id}/actions/attach">client.volumes.actions.<a href="./src/resources/volumes/actions.ts">attach</a>(id, { ...params }) -> ActionAttachResponse</code>
- <code title="post /volumes/{id}/actions/change_protection">client.volumes.actions.<a href="./src/resources/volumes/actions.ts">changeProtection</a>(id, { ...params }) -> ActionChangeProtectionResponse</code>
- <code title="post /volumes/{id}/actions/detach">client.volumes.actions.<a href="./src/resources/volumes/actions.ts">detach</a>(id) -> ActionDetachResponse</code>
- <code title="post /volumes/{id}/actions/resize">client.volumes.actions.<a href="./src/resources/volumes/actions.ts">resize</a>(id, { ...params }) -> ActionResizeResponse</code>
