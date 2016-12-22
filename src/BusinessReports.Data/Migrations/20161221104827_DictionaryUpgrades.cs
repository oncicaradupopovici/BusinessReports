using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessReports.Data.Migrations
{
    public partial class DictionaryUpgrades : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Counties_Code",
                table: "Counties");

            migrationBuilder.DropIndex(
                name: "IX_Cities_Code",
                table: "Cities");

            migrationBuilder.DropIndex(
                name: "IX_Caens_Code",
                table: "Caens");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "Cities");

            migrationBuilder.AddColumn<int>(
                name: "CountryId",
                table: "Caens",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Counties_Code_CountryId",
                table: "Counties",
                columns: new[] { "Code", "CountryId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cities_Name_CountyId",
                table: "Cities",
                columns: new[] { "Name", "CountyId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Caens_CountryId",
                table: "Caens",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Caens_Code_CountryId",
                table: "Caens",
                columns: new[] { "Code", "CountryId" },
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Caens_Countries_CountryId",
                table: "Caens",
                column: "CountryId",
                principalTable: "Countries",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Caens_Countries_CountryId",
                table: "Caens");

            migrationBuilder.DropIndex(
                name: "IX_Counties_Code_CountryId",
                table: "Counties");

            migrationBuilder.DropIndex(
                name: "IX_Cities_Name_CountyId",
                table: "Cities");

            migrationBuilder.DropIndex(
                name: "IX_Caens_CountryId",
                table: "Caens");

            migrationBuilder.DropIndex(
                name: "IX_Caens_Code_CountryId",
                table: "Caens");

            migrationBuilder.DropColumn(
                name: "CountryId",
                table: "Caens");

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Cities",
                maxLength: 20,
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Counties_Code",
                table: "Counties",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cities_Code",
                table: "Cities",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Caens_Code",
                table: "Caens",
                column: "Code",
                unique: true);
        }
    }
}
