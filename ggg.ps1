Get-aduser -filter {samaccountname -like "*smarin*" | select name


Get-ADUser -Identity celkanich -Properties *



Get-ADUser -Filter * -Properties lastlogondate, whencreated | select samaccountname, name, lastlogondate, whencreated | Export-Csv .\Downloads\Fulllist.csv

$vdi = Get-Content -path C:\Users\smarin\Downloads\PS\vdi.txt

foreach ($user in $vdi)
{
    Get-ADPrincipalGroupMembership -Identity $user.samaccountname | select name | where name -like "*LLBAAD CA MFA Blue VDI Access*"


}
